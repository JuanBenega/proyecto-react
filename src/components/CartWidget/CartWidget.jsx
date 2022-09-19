import './CartWidget.css';
import Cart from '../img/carrito.png';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <span className='cart' ><img src={Cart} alt="carrito" /> {cart.length}</span>
        </div>
    )
}

export default CartWidget;
