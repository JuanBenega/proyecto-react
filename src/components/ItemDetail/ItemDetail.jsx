import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ name, description, img, price }) => {
    const stock = 10;
    const initial = 1;

    return (
        <>
            <div className="row">
                <div className="col-md-8 d-flex aling-items-center">
                    <img alt={name} src={img} className="img-fluid rounded" />
                </div>
                <div className="col-md-4 side">
                    <div className='row'>
                        <h2>{name}</h2>
                        <h4>Descripción:</h4>
                        <p>{description}</p>
                        <h3 className='d-flex justify-content-end'>${price}</h3>
                    </div>
                        <ItemCount stock={stock} initial={initial} />

                </div>
            </div>
        </>
    )
}

export default ItemDetail;