import './CartWidget.css';
import Cart from '../img/carrito.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    
    const { cart, artsAtCart } = useContext(CartContext);
    
    return (
            <NavLink className={`${cart.length === 0 ? 'hide' : ''} cart`} to={'cart'}><img src={Cart} alt="carrito" /> {artsAtCart}</NavLink>
    )
}

export default CartWidget;
