import './Navbar.css';
import Logo from '../img/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navb = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navProp">
            <Container className="container">
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand">
                        <img className="logo img-fluid" src={Logo} alt="Logo Cuerpo y Armonía" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to={'/'} className="nav-link btnNav">Productos</NavLink>
                        <NavLink to={'/category/hair'} className="nav-link btnNav">Cuidado del cabello</NavLink>
                        <NavLink to={'/category/body'} className="nav-link btnNav">Cuidado corporal</NavLink>
                        <NavLink to={'/login'} className="nav-link btnNav">Login</NavLink>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navb;