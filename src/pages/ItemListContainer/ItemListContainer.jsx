import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import { getFirestore, getDocs, collection } from 'firebase/firestore'


const ItemListContainer = () => {

    const [load, setLoad] = useState(false);
    const [productList, setProductList] = useState([]);
    const { catId } = useParams();

    // conexión a Firebase y llamada a colección de productos
    useEffect(() => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'products');
        getDocs(querySnapshot).then((res) => {
            const data = res.docs.map((doc) => {
                return { item: doc.id, ...doc.data() } // con esto me devuelve toda la info de la coleccion que llamé de firebase
            });
            let filteredData = data.filter(product => product.category === catId);
            catId
                ? setProductList(filteredData)
                : setProductList(data)
            setLoad(true);
        })
        .catch (err => console.log (err));
    }, [catId]);

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