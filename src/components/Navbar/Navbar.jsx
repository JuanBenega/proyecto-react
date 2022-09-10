import './Navbar.css';
import Logo from '../img/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navProp">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img className="logo img-fluid" src={Logo} alt="Logo Cuerpo y Armonía" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav list">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link btnNav">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/hair'} className="nav-link btnNav">Cuidado del cabello</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/body'} className="nav-link btnNav">Cuidado corporal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/login'} className="nav-link btnNav">Login</NavLink>
                        </li>
                        <li>
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;