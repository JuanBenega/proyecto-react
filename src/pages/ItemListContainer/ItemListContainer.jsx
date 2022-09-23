import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import data from '../../components/mockData';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import  RingLoader  from "react-spinners/RingLoader";



const ItemListContainer = () => {

    const [load, setLoad] = useState(false);
    const [productList, setProductList] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
            setLoad(true);
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
            {load === false
                ? <div className="loader"><RingLoader color="#67b967" size={200} /></div>
                : <ItemList productList={productList} />
            }
                       
        </>

    )
}

export default ItemListContainer;