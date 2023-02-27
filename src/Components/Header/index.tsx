import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      {/* <img src={} alt="" /> */}
      Logo
      <nav>
        <NavLink to="/" title="Home" className="active">
          {/* <Timer size={24} /> */}Home
        </NavLink>
        <NavLink to="/comics" title="Comics">
          {/* <Scroll size={24} /> */}Comics
        </NavLink>
        <NavLink to="/send" title="Send">
          Send
        </NavLink>
      </nav>
    </Container>
  )
}
