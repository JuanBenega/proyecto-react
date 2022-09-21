import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Cart.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cart = () => {
  const { cart } = useContext(CartContext)


  return (
    <>
      <h1>Carrito de compras</h1>;
      {
        cart.map((element) => (
          <Container key={element.item}>
            <Row className="itemCart" >
              <h4>{element.name}</h4>
              <Col md={2}>
                <h5>{element.quantity}</h5>
              </Col>
              <Col md={4}>
                <img src={element.img} className="card-img-top" alt={element.name} />
              </Col>
              <Col md={2}>
                <h5>Precio: ${element.price}</h5>
              </Col>
              <Col md={2}>
                <h5>Total: ${element.price*element.quantity}</h5>
              </Col>
              <Col md={2}>
                <button>Eliminar del carrito</button>
              </Col>
            </Row>
          </Container>
        ))
      }
    </>
  )
}

export default Cart