import './Item.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

const Item = ({ name, img, price }) => {
    return (
        <Card className="text-end border-dark h-100 styleItem">
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title as="h5" className="text-start">{name}</Card.Title>
                <Card.Text as="h6">${price}</Card.Text>
            </Card.Body>
        </Card >
    )
}

export default Item