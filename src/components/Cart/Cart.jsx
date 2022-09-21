import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Cart.css'


const Cart = () => {
  const { cart } = useContext(CartContext)


  let cartItems = 
      cart.map((element) => {
        return (`Cantidad: ${element.quantity} de ${element.name} - Total: $${element.price * element.quantity}`)
      })
  

  return (
    <>
      <h1>Carrito de compras</h1>
      <ul>
        {cartItems}
      </ul>
    </>
  )
}

export default Cart