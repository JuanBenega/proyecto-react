import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ name, description, img, price, item, stock }) => {
    const initial = 0;

    const [items, setItems] = useState(initial);
    const { addToCart } = useContext(CartContext);

    return (
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
                <button className='addToCart' onClick={() => addToCart(name, items, price, img, item, stock)}>Agregar al carrito</button>
            </Col>
        </Row>
    )
}

export default ItemDetail;