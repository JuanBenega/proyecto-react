import Item from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.css';



const ItemList = ({ productList }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        productList.map((product) =>
                            <Item
                                key={product.item}
                                name={product.nombre}
                                img={product.img}
                                price={product.precio}
                            />)
                    }
                </div>
            </div>
        </>
    )
};

export default ItemList;