import { Link } from "react-router-dom";
import "./navBarra.css"

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navLista">
          <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
          <li className="navItem"><Link to="/page1" className="navLink">Pagina 1</Link></li>
          <li className="navItem"><Link to="/page2" className="navLink">Pagina 2</Link></li>
          <li className="navItem"><Link to="/page3" className="navLink">Pagina 3</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
