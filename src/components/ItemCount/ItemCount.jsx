import 'bootstrap/dist/css/bootstrap.css';
import './ItemCount.css';


const ItemCount = ({ stock, items, setItems }) => {
 
    const addItem = () => {
        items < stock ? setItems(items + 1) : alert('No hay más estock disponible');
    };

    const removeItem = () => {
        items > 0 && setItems(items - 1)
    };

    const onAdd = () => {
        items > 0 && alert(`Se agregaron ${items} items al carrito`)
    };

    return (
        <>
                <div className='row'>
                    <div className="card counter">
                            <h4 className="card-header  text-center">
                                Comprar
                            </h4>
                            <div className="card">
                                <h5 className="card-text text-center">
                                    {items}
                                </h5>
                                <div className='buttons'>
                                    <button onClick={addItem} className='mx-2 px-3 rounded border border-1'> + </button>
                                    <div>Cantidad</div>
                                    <button onClick={removeItem} className='mx-2 px-3 rounded border border-1'> - </button>
                                </div>
                                {/* <p className='mt-2'>Stock disponible: {stock}</p> */}
                            </div>
                    </div>
                </div>
        </>
    )
}

export default ItemCount;