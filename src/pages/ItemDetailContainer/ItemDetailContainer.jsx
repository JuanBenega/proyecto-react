import './ItemDetailContainer.css';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from '../../components/mockData';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import  RingLoader  from "react-spinners/RingLoader";



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        getItem.then((response) => {
            setItem(response[0]);
            setLoad(true);
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
            {load === false
                ? <div className="loader"><RingLoader color="#67b967" size={200} /></div>
                : <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 my-3 p-2 detail">
                            <h2 className='text-center'>Detalle de Item</h2>
                            <ItemDetail
                                name={item.name}
                                description={item.description}
                                img={item.img}
                                price={item.price}
                                item={item.item}
                            />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetailContainer;