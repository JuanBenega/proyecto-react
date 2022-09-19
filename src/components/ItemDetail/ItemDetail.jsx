import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState, useContext } from 'react';
// import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
// import { Button } from 'bootstrap';


const ItemDetail = ({ name, description, img, price }) => {
    const stock = 10;
    const initial = 1;

    const [items, setItems] = useState(initial);
    const { addToCart } = useContext(CartContext);

    // const addToCart = (name, items) => {

    //     setCart(cart.concat({name: name, quantity: items}));
        
    // }

    return (
        <>
            <div className="row">
                <div className="col-md-8 d-flex aling-items-center">
                    <img alt={name} src={img} className="img-fluid rounded" />
                </div>
                <div className="col-md-4 side">
                    <div className='row'>
                        <h2>{name}</h2>
                        <h4>Descripción:</h4>
                        <p>{description}</p>
                        <h3 className='d-flex justify-content-end'>${price}</h3>
                    </div>
                    <ItemCount stock={stock} items={items} setItems={setItems} />
                    {/* <NavLink className='addToCart' to={'/cart'}>Agregar al carrito</NavLink> */}
                    <button className='addToCart' onClick={()=>addToCart(name, items)}>Agregar al carrito</button>
            
                </div>
            </div>
        </>
    )
}

export default ItemDetail;