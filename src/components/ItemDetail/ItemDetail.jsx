import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import swal from '@sweetalert/with-react';

const ItemDetail = ({ name, description, img, price, item, stock }) => {

    const [items, setItems] = useState(0);
    const { addToCart } = useContext(CartContext);
    const [show, setShow] = useState(false);

    // Muestro los avisos de producto agregado al carrito
    const showToast = (value) => setShow(value);

    // Creo mensajes para el usuario
    const showMessage = (type, title, text) => {
        swal({
            title: title,
            text: text,
            icon: type,
            buttons: false,
            timer: 3000,
        });
    }

    return (
        <>
            <Row>
                <Col md={8} className="d-flex aling-items-center">
                    <img alt={name} src={img} className="img-fluid rounded" />
                </Col>
                <Col md={4} className="side">
                    <Row>
                        <h2>{name}</h2>
                        <h4>Descripción:</h4>
                        <p>{description}</p>
                        <h3 className='d-flex justify-content-end'>${price}</h3>
                    </Row>
                    <ItemCount stock={stock} items={items} setItems={setItems} />
                    <p>Stock disponible: {stock}</p>
                    <button className='addToCart' onClick={() => addToCart(name, items, price, img, item, stock, showToast, showMessage)}>Agregar al carrito</button>
                </Col>
            </Row>

            <ToastContainer position='top-end' className='m-5'>
                <Toast show={show}>
                    <Toast.Body className='text-center'>
                        <h5>Agregó <strong>{items} {name}</strong> al carrito</h5></Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default ItemDetail;