import './ItemDetailContainer.css';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from '../../components/mockData';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem.then((response) => {
            setItem(response[0])
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            let filteredData = data.filter(product => product.item === id);
            resolve(filteredData);
        }, 2000);
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 my-3 p-2 detail">
                        <h2 className='text-center'>Detalle de Item</h2>
                        <ItemDetail
                            name={item.name}
                            description={item.description}
                            img={item.img}
                            price={item.price}
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </>
    )
}

export default ItemDetailContainer;