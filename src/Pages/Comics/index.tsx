import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import getComics from "../../services/api"
import { Card, CardTitle, CardImage, Container, ModalContent, ModalHeader, ModalSection, Button, Loading } from './styles'


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

export function Comics() {
  const [comicsList, setComicsList] = useState<ComicsProps[]>([]);
  const [selectedComic, setSelectedComic] = useState<ComicsProps | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getComics()
        .then(comics => {
          setComicsList(comics.data.data.results);
          setLoading(false);
        })
        .catch((err: string) => {
          setError(err);
          setLoading(false);
        });
    }, 2000);
  }, []);


  const handleCardClick = (comic: ComicsProps) => {
    setSelectedComic(comic);
  };

  const navigate = useNavigate();

  const state = {
    comic: selectedComic,
  }
  const handleSendClick = () => {
    navigate('/send/', { state });
  };
  if (loading) {
    return <Loading>Carregando...</Loading>
  }
  if (error) {
    return <div>{error}</div>
  }
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
                    <div>
                      <button onClick={handleSendClick}>Confirmar</button>
                    </div>
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
