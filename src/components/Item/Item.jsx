import 'bootstrap/dist/css/bootstrap.css';
import './Item.css'


const Item = ({ name, img, price }) => {
    return (
        <>
            {/* <div className="col-3 my-3 styleItem" > */}
                <div className="card d-flex text-end border-dark h-100 styleItem">
                    <img src={img} className="card-img-top" alt={name}  />
                    <div className="card-body">
                        <h5 className="card-title text-start">{name}</h5>
                        <h6 className="card-text">${price}</h6>
                        {/* <button type="button" className="btn disabled align-self-end" id="btnProd${producto.item}" onClick="cargarCarrito(${producto.item})">Agregar</button> */}
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Item