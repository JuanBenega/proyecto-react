import './Navbar.css';
import Logo from '../img/Logo.png';
import  CartWidget  from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className="navProp">
            <a href="#">
                <img className="logo" src={Logo} alt="Logo Cuerpo y Armonía"/>
            </a>

            <ul className="list">
                <li className="nav-item">
                    <a className="btnNav" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="btnNav" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="btnNav" href="#">Contacto</a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;