import './ItemList.css'
import Item from "../Item/Item";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const ItemList = ({ productList }) => {
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col md={10}>
                    <Row className="d-flex justify-content-arround">

                        {
                            productList.map((product) => 
                                <Col md={4} className='my-3 styleContainer' key={product.item}>
                                    <NavLink
                                        to={'/detail/' + product.item}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Item
                                            name={product.name}
                                            img={product.img}
                                            price={product.price}
                                        />
                                    </NavLink>
                                </Col>
                            )

                        }

                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
};

export default ItemList;