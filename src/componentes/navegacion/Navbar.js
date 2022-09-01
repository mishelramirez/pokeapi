import react from "react";
import {NavLink} from "react-router-dom"



const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" to="/" >Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Características</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Precios</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Enlace dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Acción</a></li>
            <li><a className="dropdown-item" href="#">Otra acción</a></li>
            <li><a className="dropdown-item" href="#">Algo más aquí</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
