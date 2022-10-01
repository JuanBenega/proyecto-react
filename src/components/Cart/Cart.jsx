import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Cart.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { NavLink } from "react-router-dom";


const Cart = () => {
  const { cart, removeItem } = useContext(CartContext)

  return (
    <Container className='cartContainer'>
      <h1>Carrito de compras</h1>
      {cart.length === 0
        ? <div className='emptyCart'> 
          <h3>El carrito está vacío, elija algún producto para comprar</h3>
          <NavLink to={'/'} className="btnProducts">Productos</NavLink>
          <br />
          <br />
          </div>
        : cart.map((element) => (
                     <Container key={element.item}>
                       <Row className="itemCart" >
                         <h4>{element.name}</h4>
                         <Col md={1} className='cartContent'>
                           {/* <button className='btnCart' onClick={()=> }> + </button> */}
                           <h5>{element.quantity}</h5>
                           {/* <button className='btnCart'> - </button> */}
                         </Col>
                         <Col md={5} className='cartContent'>
                           <Image src={element.img} fluid rounded thumbnail alt={element.name} className='imgCart'/>
                         </Col>
                         <Col md={2} className='cartContent'>
                           <h5>Precio: ${element.price}</h5>
                         </Col>
                         <Col md={2} className='cartContent'>
                           <h5>Total: ${element.price * element.quantity}</h5>
                         </Col>
                         <Col md={2} className='cartContent'>
                           <button className='btnCart' onClick={() => removeItem(element.item)}>Eliminar del carrito</button>
                         </Col>
                       </Row>
                     </Container>
                   ))
      }
    </Container>


  )


}


export default Cart