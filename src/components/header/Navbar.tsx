import { Link, useLocation } from "react-router-dom"
import HiddenButton from "./HiddenButton"


function Header() {
  const location = useLocation()

  return (
    <nav className="navbar bg-dark border-bottom border-body d-flex justify-content-around" data-bs-theme="dark">
      <ul className="nav gap-2">
        <li className={`nav-item`}>
          <Link className={`nav-link text-white fw-semibold ${location.pathname === "/" ? "bg-secondary rounded-1" : ""}`} aria-current="page" to="/">Lista de cargas</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-white  fw-semibold ${location.pathname === "/searcher" ? "bg-secondary rounded-1" : ""}`} to="/searcher">Buscador</Link>
        </li>
      </ul>

      <HiddenButton/>
    </nav>
  )
}
export default Header