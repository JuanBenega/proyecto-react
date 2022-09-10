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
                            <div className='col-3 my-3 styleContainer'>
                            <NavLink
                                key={product.item}
                                to={'/detail/' + product.item}
                                style={{textDecoration: 'none'}}
                            >
                                <Item
                                    name={product.nombre}
                                    img={product.img}
                                    price={product.precio}
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