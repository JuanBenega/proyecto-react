import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';
import data from '../../components/mockData';
import { useState, useEffect } from "react";


const ItemListContainer = () => {
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
            {/* <ItemCount stock={stock} initial={initial} /> */}
            <ItemList productList={productList} />
            
        </>

    )
}

export default ItemListContainer;