import React from 'react';
import './Navbar.css';
import Logo from '../img/Logo.png';

import Nav from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    return (
        <div>
            <Nav className="navbar navbar-expand-lg navbar-dark navPers">
                <div className="container-fluid">
                    <a className="navbar-brand" href="../html/index.html">
                        <img src={Logo} alt="Logo Cuerpo y Armonía" className="img-fluid" srcSet="src/media/images/logo-small.png 175w, src/media/images/Logo.png 698w" sizes="50vw" />
                    </a>
                    <Button className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="NavbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon" />
                    </Button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-Nav">
                            <li className="nav-item">
                                <a className="nav-link m-2 p-2 btnNav" href="index.html">Nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link m-2 p-2 dropdown-toggle btnNav" href="#" id="navbarDropdownMenuLink" role="Button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</a>
                                <ul className="dropdown-menu menu-servicios" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item m-2 p-2 btnNav" href="src/pages/entrenamiento.html">Entrenamiento</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item m-2 p-2 btnNav" href="src/pages/masajes.html">Masajes</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item m-2 p-2 btnNav" href="src/pages/productos.html">Productos</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-2 p-2 btnNav" href="src/pages/bienestar.html">Artículos de Binestar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-2 p-2 btnNav" href="src/pages/contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>

        </div>
    )
}