import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetail.css'

const ItemDetail = ({ name, description, img, price }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <img alt={name} src={img} className="img-fluid rounded" />
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <h2>{name}</h2>
                        <h4>Descripción:</h4>
                        <p>{description}</p>
                        <h3 className='d-flex justify-content-end'>${price}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;