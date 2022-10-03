import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Cant = ({ stock, initial, onAdd }) => {

  const [cant, setCant] = useState(initial);

  // Botones para cantidad de unidades del producto
  const handleMas = () => {

    if (cant < stock) {

      setCant(cant + 1)

    } else {

      Toastify({
        text: "Máximo de stock alcanzado",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "rgb(238, 15, 15)",
          border : "1px solid rgb(200, 120, 120)",
          borderRadius : "5px",
          marginTop: "23px"
        }
      }).showToast();
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
