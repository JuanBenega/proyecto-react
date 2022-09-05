import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';



const ItemList = ({saludo}) => {
    const stock = 10;
    const initial=5;
    

    return (
        <>
            <h2 className='title'>{saludo}</h2>
            <ItemCount stock= {stock} initial= {initial} /> 
        </>

    )
}

export default ItemList;