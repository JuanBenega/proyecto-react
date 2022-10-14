import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import moment from "moment";
import swal from '@sweetalert/with-react';


const Cart = () => {
  
  const db = getFirestore();
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [email2, setEmail2] = useState("");
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cart,
    total: cart.reduce((act, item) => act + item.quantity * item.price, 0),
    date: moment().format(),
  });

  // Actualizo la orden a crear según se modifica el contenido del carrito
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

  // Creo mensajes para el usuario
  const showMessage = (type, title, text) => {
    swal({
      title: title,
      text: text,
      icon: type,
      buttons: false,
      timer: 5000,
    });
  }

  // Creación de la orden de compra
  const createOrder = () => {
    const queryOrders = collection(db, "orders");
    if (order.buyer.name === "") {
      showMessage("error", "Todos los campos deben ser completados", false);
    } else if (order.buyer.phone === 0) {
      showMessage("error", "Todos los campos deben ser completados", false);
    } else if (order.buyer.email === "") {
      showMessage("error", "Todos los campos deben ser completados", false);
    } else if (email2 === "") {
      showMessage("error", "Todos los campos deben ser completados", false);
    } else if (order.buyer.email !== email2)
    showMessage("error", "Los emails deben coincidir", false);
    else {

      // Actualizo el stock en la base de datos de firebase
      cart.forEach((element) => {
        const queryDoc = doc(db, "products", element.item);
        let newStock = element.stock - element.quantity;
        setDoc(queryDoc, { stock: newStock }, { merge: true });
      });

      // Creo la orden de compra en firebase
      addDoc(queryOrders, order)
        .then(({ id }) => {
          showMessage("success", `Felicidades por tu compra`, `Te enviaremos los datos de facturación por Mail.\nTu ID de compra es ${id}`);
          clearCart();
          setShowModal(false);
        })
        .catch(() => showMessage("error", "Hubo un problema con su compra", false));
    }
  };

  // Manejo el cambio de los inputs en el form de la orden
  const handleOnChange = (e) => {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  const handleOnChangeMail2 = (e) => {
    setEmail2(e.target.value);
  }

  return (
    <Container fluid className="cartContainer">
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <h3>El carrito está vacío, elija algún producto para comprar</h3>
          <NavLink to={"/"} className="btnProducts">
            Productos
          </NavLink>
        </div>
      ) : (
        cart.map((element) => (
          <Container fluid key={element.item}>
            <Row className="itemCart">
              <h4>{element.name}</h4>
              <Col md={1} className="cartContent">
                <h5>{element.quantity}</h5>
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

      <div className={`${cart.length === 0 ? 'hide' : ''} purchase`}>
        <button className="btnProducts" onClick={() => setShowModal(true)}>
          Finalizar compra
        </button>
      </div>

      {/* Formulario de compra */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalOrder"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <h1>Finalizá la compra</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Por favor completá los datos para que podamos coordinar la entrega</h4>
          <Container fluid className="modalForm">
            <label>Nombre y Apellido</label>
            <input
              name="name"
              type="text"
              value={order.buyer.name}
              onChange={handleOnChange}
              className="modalInput"
            />
            <label>Teléfono</label>
            <input
              name="phone"
              type="number"
              value={order.buyer.phone}
              onChange={handleOnChange}
              className="modalInput"
            />
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={order.buyer.email}
              onChange={handleOnChange}
              className="modalInput"
            />
            <label>Reingresar email</label>
            <input
              name="email2"
              type="email"
              value={email2}
              onChange={handleOnChangeMail2}
              className="modalInput"
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)} className="btnProducts btnCancel">
            Cancelar
          </button>
          <button onClick={createOrder} className="btnProducts">
            Comprar
          </button>
        </Modal.Footer>
      </Modal>
    </Container >
  );
};

export default Cart;
