import { NavLink } from "react-router-dom";
import { Container, Logo } from "./styles";
import marvelLogo from '../../assets/marvel.svg'

export function Header() {
  return (
    <Container>
      <NavLink to="/">
        <Logo src={marvelLogo} />
      </NavLink>
      <nav>
        <NavLink to="/" title="Home" className="active">
          Home
        </NavLink>
        <NavLink to="/comics" title="Comics">
          Comics
        </NavLink>
        <NavLink to="/send" title="Send">
          Send
        </NavLink>
      </nav>
    </Container>
  )
}
