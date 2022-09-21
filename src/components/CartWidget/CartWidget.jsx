import './CartWidget.css';
import Cart from '../img/carrito.png';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <NavLink className='cart' to={'cart'}><img src={Cart} alt="carrito" /> {cart.length}</NavLink>
        </div>
    )
}

export default CartWidget;
