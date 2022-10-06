import "bootstrap/dist/css/bootstrap.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import "./Cart.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from "moment";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: 0,
      email: "",
    },
    items: cart,
    total: cart.reduce((act, item) => act + item.quantity * item.price, 0),
    date: moment().format(),
  });

  useEffect(() => {
    setOrder((currentOrder) => {
      return {
        ...currentOrder,
        items: cart,
        total: cart.reduce((act, item) => act + item.quantity * item.price, 0),
        date: moment().format(),
      };
    });
  }, [cart]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        alert(
          `Felicidades por tu compra, te enviaremos los datos de facturación por Mail.\nTu ID de compra es ${id}`
        )
        clearCart();
        setShowModal(false);
  })
      .catch(() => alert("Hubo un problema con su compra"));
  };

  const handleOnChange = (e) => {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Container className="cartContainer">
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <h3>El carrito está vacío, elija algún producto para comprar</h3>
          <NavLink to={"/"} className="btnProducts">
            Productos
          </NavLink>
          <br />
          <br />
        </div>
      ) : (
        cart.map((element) => (
          <Container key={element.item}>
            <Row className="itemCart">
              <h4>{element.name}</h4>
              <Col md={1} className="cartContent">
                {/* <button className='btnCart' onClick={()=> }> + </button> */}
                <h5>{element.quantity}</h5>
                {/* <button className='btnCart'> - </button> */}
              </Col>
              <Col md={5} className="cartContent">
                <Image
                  src={element.img}
                  fluid
                  rounded
                  thumbnail
                  alt={element.name}
                  className="imgCart"
                />
              </Col>
              <Col md={2} className="cartContent">
                <h5>Precio: ${element.price}</h5>
              </Col>
              <Col md={2} className="cartContent">
                <h5>Total: ${element.price * element.quantity}</h5>
              </Col>
              <Col md={2} className="cartContent">
                <button
                  className="btnCart"
                  onClick={() => removeItem(element.item)}
                >
                  Eliminar del carrito
                </button>
              </Col>
            </Row>
          </Container>
        ))
      )}
      <div className="purchase">
        <button className="btnProducts" onClick={handleShowModal}>
          Finalizar compra
        </button>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Finalizar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>¡¡¡Muchas gracias por tu compra!!!</h2>
          <h4>
            Por favor completá los siguientes datos para coordinar la entrega
          </h4>
          <label>Nombre y Apellido</label>
          <input
            name="name"
            type="text"
            value={order.buyer.name}
            onChange={handleOnChange}
          />
          <label>Teléfono</label>
          <input
            name="phone"
            type="number"
            value={order.buyer.phone}
            onChange={handleOnChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={order.buyer.email}
            onChange={handleOnChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseModal} className="btnProducts">
            Close
          </button>
          <button onClick={createOrder} className="btnProducts">
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
