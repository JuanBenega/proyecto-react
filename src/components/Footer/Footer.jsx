import './Footer.css';
import { NavLink } from "react-router-dom";
import Logo from '../img/Logo-ByN.png';
import { Facebook } from 'react-bootstrap-icons'
import { Whatsapp } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
            <Navbar expand="lg" bg="dark" variant="dark" className="footProp">
                <Container fluid className="contFoot">
                    <Nav className='socialNet'>
                        <NavLink to={"https://web.whatsapp.com"} className="d-flex justify-content-center">
                            <Whatsapp size={55} className='btnFoot' />
                        </NavLink>
                        <NavLink to={"https://www.facebook.com/cuerpo.y.armonia/"}
                            className="d-flex justify-content-center">
                            <Facebook size={55} className='btnFoot' />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/cuerpo.y.armonia/"}
                            className="d-flex justify-content-center">
                            <Instagram size={55} className='btnFoot' />
                        </NavLink>
                    </Nav>
                    <Nav >
                        <ul className='listFoot'>
                            <NavLink to={'/'} className="nav-link btnFoot">Productos</NavLink>
                            <NavLink to={'/category/hair'} className="nav-link btnFoot">Cuidado del cabello</NavLink>
                            <NavLink to={'/category/body'} className="nav-link btnFoot">Cuidado corporal</NavLink>
                            <NavLink to={'/login'} className="nav-link btnFoot">Login</NavLink>
                        </ul>
                    </Nav>
                    <Navbar.Brand>
                        <NavLink to="/" className="navbar-brand">
                            <img className="logo img-fluid" src={Logo} alt="Logo Cuerpo y Armonía" />
                        </NavLink>
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default Footer