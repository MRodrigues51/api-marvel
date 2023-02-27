import { useEffect, useState } from "react";
import Modal from 'react-modal';
import getComics from "../../services/api"
import { Card, CardTitle, CardImage, Container, ModalContent } from './styles'

interface ComicsProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function Comics() {
  const [comicsList, setComicsList] = useState<ComicsProps[]>([]);
  const [selectedComic, setSelectedComic] = useState<ComicsProps | null>(null);


  useEffect(() => {
    getComics()
      .then(comics => setComicsList(comics.data.data.results))
      .catch(err => console.log(err));
  }, []);

  const handleCardClick = (comic: ComicsProps) => {
    setSelectedComic(comic);
  };
  console.log(comicsList)
  return (

    <Container>
      {comicsList.map(comic => (
        <Card key={comic.id} onClick={() => handleCardClick(comic)}>
          <CardTitle>{comic.title}</CardTitle>
          <CardImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
        </Card>
      ))}
      <Modal isOpen={selectedComic !== null}>
        <ModalContent>
          {selectedComic && (
            <>
              <h2>{selectedComic.title}</h2>
              <p>{selectedComic.description}</p>

              <img src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`} alt={selectedComic.title} />
            </>
          )}
          <button onClick={() => setSelectedComic(null)}>Fechar</button>
        </ModalContent>
      </Modal>

    </Container>

  );
}
