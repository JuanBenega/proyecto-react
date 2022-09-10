import './ItemList.css'
import Item from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";



const ItemList = ({ productList }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-arround">

                    {
                        productList.map((product) =>
                            <div className='col-3 my-3 styleContainer' key={product.item}>
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
                            </div>
                        )

                    }

                </div>
            </div>
        </>
    )
};

export default ItemList;