import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Cant from "./Cant";

const CardDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qtity) => {
    Swal.fire({
      icon: 'success',
      title: 'Añadido al carrito',
      width: '27rem' ,
      padding: '33px',
      color: '#000',
      background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
    })
    setItemCount(qtity)
  }

    return (
        <div className="container-Detail">
            <img className="imgDetail" src={item.img} alt="producto"/>
            <div className="bodyDetail">
              <h3 className="card-title">{item.name}</h3>
              <p>{item.marca}</p>
              <p>{item.description}</p>
              <p><small className="text-muted">Stock: {item.stock}</small></p>
              <p>${item.precio}</p>
              {
                itemCount === 0
                ? <Cant initial={itemCount} stock={item.stock} onAdd={onAdd} />
                : <Link to="/Cart"><button className="btn btn-dark agregarCarrito">Ver mi carrito</button></Link>
              }
            </div>
        </div>
    );
}

export default CardDetail;