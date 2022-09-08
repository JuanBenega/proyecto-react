import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import data from '../mockData';
import { useState, useEffect } from "react";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemListContainer = ({ saludo }) => {
    const stock = 10;
    const initial = 5;

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    return (
        <>
            <h2 className='title'>{saludo}</h2>
            <ItemCount stock={stock} initial={initial} />
            <ItemList productList={productList} />
            <ItemDetailContainer />
        </>

    )
}

export default ItemListContainer;