import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../mockData';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';



const ItemDetailContainer = () => {
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
            resolve(data);
        }, 2000);
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 my-3 p-2 detail">
                        <h2>Detalle de Item</h2>
                        <ItemDetail
                            name={item.nombre}
                            description={item.descripcion}
                            img={item.img}
                            price={item.precio}
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </>
    )
}

export default ItemDetailContainer;