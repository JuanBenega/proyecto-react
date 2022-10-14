import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";

const ItemCount = ({ stock, items, setItems }) => {

    // Sumo items
    const addItem = () => {
        items < stock ? setItems(items + 1) : alert('No hay más estock disponible');
    };

    // Resto items
    const removeItem = () => {
        items > 0 && setItems(items - 1)
    };

    return (
        <Row>
            <Card className="counter">
                <Card.Header as="h4" className="text-center">
                    Comprar
                </Card.Header>
                <Card.Body>
                    <Card.Text as="h5" className="text-center">
                        {items}
                    </Card.Text>
                    <div className='buttons'>
                        <button onClick={addItem} className='mx-2 px-3 rounded border border-1'> + </button>
                        <div>Cantidad</div>
                        <button onClick={removeItem} className='mx-2 px-3 rounded border border-1'> - </button>
                    </div>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default ItemCount;