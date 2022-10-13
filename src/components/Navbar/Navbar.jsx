import './Navbar.css';
import Logo from '../img/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navb = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navProp">
            <Container fluid className="container">
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand">
                        <img className="logo img-fluid" src={Logo} alt="Logo Cuerpo y Armonía" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className='list' >
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