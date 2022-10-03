import { Link } from "react-router-dom";

const Card = ({product}) => {

    return (
      <>
      <div className='card'>
        <img className='product' src={product.img} alt="producto" />
        <Link to={`/detail/${product.id}`}><button className="btn btn-dark agregarCarrito">Ver detalles</button></Link>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p>{product.marca}</p>
          <p>{product.precio}</p>
        </div>
      </div>           
      </>
    );
}

export default Card;
