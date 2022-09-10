import './Navbar.css';
import Logo from '../img/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navProp">
            <NavLink to="/">
                <img className="logo" src={Logo} alt="Logo Cuerpo y Armonía" />
            </NavLink>

            <ul className="list">
                <li className="nav-item">
                    <NavLink to={'/'} className="btnNav">Productos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/us'} className="btnNav">Cuidado del cabello</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/'} className="btnNav">Cuidado corporal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/contact'} className="btnNav">Login</NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;