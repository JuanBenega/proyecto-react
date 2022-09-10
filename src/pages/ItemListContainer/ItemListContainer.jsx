import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import data from '../../components/mockData';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {


    const [productList, setProductList] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [catId]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            let filteredData = data.filter(product => product.category === catId);
            catId
            ? resolve(filteredData)
            : resolve(data)
        }, 2000);
    });

    return (
        <>
            <ItemList productList={productList} />           
        </>

    )
}

export default ItemListContainer;