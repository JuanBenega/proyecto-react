import './CartWidget.css';
import Cart from '../img/carrito.png';

const CartWidget = () => {
    return (
        <div>
            <img src={Cart} alt="carrito" className='cart'/>
        </div>
    )
}

export default CartWidget;
