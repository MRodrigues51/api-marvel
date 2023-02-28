import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import getComics from "../../services/api"
import { Card, CardTitle, CardImage, Container, ModalContent, ModalHeader, ModalSection, Button } from './styles'
import { Send } from "../Send";


interface ComicsProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
}
interface ComicsPropsSend {
  title: string;
  localidade: string;
  cep: string;
  bairro: string;
  logradouro: string;
  uf: string;
}


export function Comics() {
  const [comicsList, setComicsList] = useState<ComicsProps[]>([]);
  const [selectedComic, setSelectedComic] = useState<ComicsProps | null>(null);
  const [destinationAddress, setDestinationAddress] = useState('');

  const [cep, setCep] = useState('');
  const [filteredData, setFilteredData] = useState<ComicsPropsSend>({
    title: '',
    localidade: '',
    cep: '',
    bairro: '',
    logradouro: '',
    uf: '',


  });

  useEffect(() => {
    getComics()
      .then(comics => setComicsList(comics.data.data.results))
      .catch(err => console.log(err));
  }, []);

  const handleCardClick = (comic: ComicsProps) => {
    setSelectedComic(comic);
  };
  console.log(comicsList)


  const navigate = useNavigate();

  const state = { data: filteredData, comic: selectedComic, destination: destinationAddress }
  const handleSendClick = () => {
    navigate('/send/', { state });
  };

  const handleCepChange = (event: any) => {
    setCep(event.target.value);
  };

  const handleCepSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setFilteredData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(filteredData)
  console.log(filteredData.localidade)
  return (

    <Container>
      {comicsList.map(comic => (
        <Card key={comic.id} onClick={() => handleCardClick(comic)}>
          <CardTitle>{comic.title}</CardTitle>
          <CardImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
        </Card>
      ))}
      <Modal className="modalContent" isOpen={selectedComic !== null}>
        <ModalContent>
          {selectedComic && (
            <div>
              <ModalHeader>
                <h2>{selectedComic.title}</h2>
                <button onClick={() => setSelectedComic(null)}>fechar</button>
              </ModalHeader>
              <ModalSection>
                <img src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`} alt={selectedComic.title} />
                <span>
                  <h3>Descriprion:</h3>
                  <p>{selectedComic.description}</p>
                  <p></p>
                  <h3>Published:</h3>
                  <p>{
                    format(new Date(
                      selectedComic.dates.find(
                        date => date.type === 'onsaleDate')?.date ?? ''),
                      'dd/MM/yyyy')
                  }
                  </p>
                  <h3>Price:</h3>
                  <p>$ {selectedComic.prices.find(price => price.type === 'printPrice')?.price || ''}</p>
                  <Button>
                    <form onSubmit={handleCepSubmit}>

                      <input type="text" id="cep" placeholder="CEP" value={cep} onChange={handleCepChange} />
                      <button type="submit">Filtrar</button>
                    </form>
                    {filteredData && (
                      <div>
                        <h2>{filteredData.localidade} - {filteredData.uf}</h2>
                        <p>Bairro: {filteredData.bairro}</p>
                        <p>Logradouro: {filteredData.logradouro}</p>
                        <p>CEP: {filteredData.cep}</p>
                        <button onClick={handleSendClick}>Confirmar</button>
                      </div>
                    )}
                  </Button>
                </span>

              </ModalSection>
            </div>

          )}
        </ModalContent>
      </Modal>
    </Container>
  );
}
