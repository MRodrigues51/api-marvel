
import { useNavigate } from "react-router-dom";
import { Container, LinkComics, ListComics, SectionComics, SubTitle } from "./styles";


export function Home() {
  const ImgBack = 'https://i.annihil.us/u/prod/marvel/i/mg/8/e0/52bdf830aa094.jpg'
  const navigate = useNavigate();
  const handleSendClick = () => {
    navigate('/comics/');
  };
  return (
    <Container>
      <section style={{
        margin: 0,
        backgroundImage: `url(${ImgBack})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        height: '300px',
        // width: '100%'
      }}>
      </section>

      <SectionComics>
        <SubTitle>COMICS</SubTitle>

        <ListComics>
          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1620075267033-09d12ec75b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsJTIwY29taWNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=250&q=30" alt="marvel" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsJTIwY29taWNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=250&q=30" alt="marvel" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsJTIwY29taWNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=250&q=30" alt="marvel" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1587270613304-4cc9ef012b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcnZlbCUyMGNvbWljc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=250&q=30" alt="marvel" />
            <footer>Ver mais</footer>
          </div>
        </ListComics>
      </SectionComics>
      <LinkComics onClick={handleSendClick}>ver mais comics ➡</LinkComics>

    </Container>
  )
}
