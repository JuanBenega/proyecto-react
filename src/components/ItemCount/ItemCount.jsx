import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ItemCount.css'


const ItemCount = ({ stock, initial }) => {

    const [items, setItems] = useState(initial)

    const add = () => {
        items < stock ? setItems(items + 1) : alert('No hay más estock disponible');
    };

    const substract = () => {
        items > 0 && setItems(items - 1);
    };

    const onAdd = () => {
        items > 0 && alert(`Se agregaron ${items} items al carrito`)
    }

    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-5"></div>
                    <div className="col-2 counter">
                        <div className="card">
                            <h4 className="card-header">
                                Comprar
                            </h4>
                            <div className="card-body">
                                <h5 className="card-text">
                                    {items}
                                </h5>
                                <div className='d-flex justify-content buttons'>
                                    <button onClick={add} className='mx-2 px-3'> + </button>
                                    <div>Cantidad</div>
                                    <button onClick={substract} className='mx-2 px-3'> - </button>
                                </div>
                                <p className='mt-2'>Stock disponible: {stock}</p>
                                <button className='addToCart' onClick={onAdd}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>

        </>
    )
}

export default ItemCount