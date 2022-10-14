import './ItemDetailContainer.css';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([])
    const [load, setLoad] = useState(false)

    // Conexión a firebase y llamada a un producto de la colección
    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, 'products', id)
        getDoc(queryDoc).then((res) => {
            setItem(res.data());  // con esto me devuelve toda la info que necesito del producto elegido
            setLoad(true);
        })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {load === false
                ? <div className="loader"><RingLoader color="#67b967" size={200} /></div>
                : <Container fluid>
                    <Row className="my-5">
                        <Col md={2}></Col>
                        <Col md={8} className="my-3 p-2 detail">
                            <h2 className='text-center'>Detalle de Item</h2>
                            <ItemDetail
                                name={item.name}
                                description={item.description}
                                img={item.img}
                                price={item.price}
                                item={id}
                                stock={item.stock}
                            />
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default ItemDetailContainer;