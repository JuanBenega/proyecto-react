import Item from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.css';



const ItemList = ({ productList }) => {
    return (
        <>
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
        </>
    )
};

export default ItemList;