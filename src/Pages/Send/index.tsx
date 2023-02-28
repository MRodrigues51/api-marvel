import { Comics } from "../Comics"
import { GoogleMap, Marker, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { BoxInfoSend, Container, ContainerForm, ContainerMap } from "./styles";
import Geocode from "react-geocode";


const containerStyle = {
  width: '600px',
  height: '400px'
};

const position = {
  lat: -7.201360602990173,
  lng: -39.39152415159019
};

interface ComicsPropsSend {
  title: string;
  data: Comic[];
}

interface Comic {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Send({ title }: ComicsPropsSend) {
  const [searchBox, setSeachBox] = useState<google.maps.places.SearchBox>()
  const [map, setMap] = useState<google.maps.Map>()
  const [markers, setMarkers] = useState<any[]>([])

  const [address, setAddress] = useState<Address>({ cep: "", logradouro: "", bairro: "", localidade: "", uf: "" });
  const [coords, setCoords] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string | null>(null);

  const apiKey = "AIzaSyDPhTZEnGi61k19jjdQprQQOerTE8TQ5U0"

  const locationRoute = useLocation();
  const { data, comic, destination } = locationRoute.state;
  useEffect(() => {
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage("pt-BR");
    Geocode.setLocationType("ROOFTOP");

  }, []);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await Geocode.fromAddress(address.logradouro + ", " + address.bairro + ", " + address.uf + ", " + address.localidade);
      const location = response.results[0].geometry.location;
      setCoords({ lng: location.lng, lat: location.lat });
      setError(null);
    } catch (error) {
      setError("Não foi possível obter as coordenadas para o endereço informado");
      setCoords({ lat: 0, lng: 0 });
    }
  };
  console.log(coords)
  const onMapLoad = (map: google.maps.Map) => {
    setMap(map)
  }
  const onLoad = (ref: google.maps.places.SearchBox) => {
    console.log('map', map)
    setSeachBox(ref)
  }


  const onPlacesChanged = () => {
    const places = searchBox!.getPlaces();
    console.log(places)
    const place = places![0]
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    }
    setMarkers([...markers, location])
    map?.panTo(location)
  }
  return (
    <Container>
      <ContainerMap>
        <LoadScript
          googleMapsApiKey={apiKey}
          libraries={['places']}
        >
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={15}
          >
            <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
              <input type="text" className="address" placeholder="Digite um endereço" value={address.logradouro + ", " + address.bairro + ", " + address.uf + ", " + address.localidade + "," + address.cep} />
            </StandaloneSearchBox>
            {markers.map((marker: any, index: any) => (
              <Marker key={index} position={marker} />
            ))}

            <></>
          </GoogleMap>
        </LoadScript>

      </ContainerMap>
      <ContainerForm>
        <div>
          <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="CEP" value={address.cep} onChange={(e) => setAddress({ ...address, cep: e.target.value })} />
            <input type="text" placeholder="Logradouro" value={address.logradouro} onChange={(e) => setAddress({ ...address, logradouro: e.target.value })} />
            <input type="text" placeholder="Bairro" value={address.bairro} onChange={(e) => setAddress({ ...address, bairro: e.target.value })} />
            <input type="text" placeholder="Localidade" value={address.localidade} onChange={(e) => setAddress({ ...address, localidade: e.target.value })} />
            <input type="text" placeholder="UF" value={address.uf} onChange={(e) => setAddress({ ...address, uf: e.target.value })} />
            <button type="submit">Buscar</button>
          </form>
          <BoxInfoSend>
            <h3>Comic selected for send:</h3>
            {comic.title}
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
          </BoxInfoSend>
          {error && <div>{error}</div>}
        </div>
      </ContainerForm>
    </Container>

  )
}
