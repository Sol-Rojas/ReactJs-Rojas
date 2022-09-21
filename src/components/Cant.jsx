import React, { useState } from 'react';
import Swal from 'sweetalert2'
const Cant = ({ stock, initial, onAdd }) => {

  const [cant, setCant] = useState(initial);

  // Botones para cantidad de unidades del producto
  const handleMas = () => {
    if (cant < stock) {
      setCant(cant + 1)
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Sin más stock',
        width: '27rem',
        padding: '33px',
        color: '#000',
        background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
      })
    }
  }
  const handleRest = () => {
    if (cant > 1) {
      setCant(cant - 1)
    }
  }

  return (
    <>
      <div className='agregar-restar'>
        <button className="btn btn-dark cantMas" onClick={handleMas}>+</button> {cant}
        <button className="btn btn-dark cantMenos" onClick={handleRest}>-</button>
      </div>
      <button className="btn btn-dark agregarCarrito" disabled={cant <= 0} onClick={() => onAdd(cant)} > Agregar al carrito</button>
    </>
  );
}

export default Cant;
