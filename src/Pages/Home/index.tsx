
import { Container, LinkComics, ListComics, SectionComics, SubTitle } from "./styles";


export function Home() {
  const ImgBack = 'https://i.annihil.us/u/prod/marvel/i/mg/8/e0/52bdf830aa094.jpg'
  return (
    <Container>
      <section style={{
        backgroundImage: `url(${ImgBack})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'unset',
        backgroundPosition: 'center',
        height: '436px'
      }}>
      </section>

      <SectionComics>
        <SubTitle>COMICS</SubTitle>

        <ListComics>
          <div>
            <h2>Title Marvel</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=30" alt="money" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsJTIwY29taWNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=250&q=30" alt="settings" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsJTIwY29taWNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=250&q=30" alt="article" />
            <footer>Ver mais</footer>
          </div>

          <div>
            <h2>Marvel Comics</h2>
            <p>Comics subscribe and description</p>
            <img src="https://images.unsplash.com/photo-1587270613304-4cc9ef012b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcnZlbCUyMGNvbWljc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=250&q=30" alt="article" />
            <footer>Ver mais</footer>
          </div>
        </ListComics>
      </SectionComics>
      <LinkComics>ver mais comics ➡</LinkComics>

    </Container>
  )
}
