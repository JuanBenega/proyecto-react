import './ItemDetailContainer.css';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { getFirestore, doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {




    const { id } = useParams();
    const [item, setItem] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, 'products', id)
        getDoc(queryDoc).then((res) => {
            setItem(res.data());  // con esto me devuelve toda la info que necesito del producto elegido
            setLoad(true);
        })
            .catch(err => console.log(err));
    }, [])

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
                                item={id}
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