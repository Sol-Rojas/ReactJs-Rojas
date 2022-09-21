import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Card = ({product}) => {

  
  const handleBuy = (id) => {
    Swal.fire({
      icon: 'success',
      title: '¡Compra exitosa!',
      width: '27rem' ,
      padding: '33px',
      color: '#000',
      background: ' url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
    })
  }

    return (
      <>
      <div className='card'>
        <img className='product' src={product.img} alt="producto" />
        <Link to={`/detail/${product.id}`}><button className="btn btn-dark agregarCarrito">Ver detalles</button></Link>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p>{product.marca}</p>
          <p>{product.precio}</p>
          <button className="btn btn-dark buy" onClick={() => handleBuy(product.id)}> Comprar</button>
        </div>
      </div>           
      </>
    );
}

export default Card;
