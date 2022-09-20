import React, { useState } from 'react';

const Cant = () => {
    
  // Botones para cantidad de unidades del producto
  const[rate, setRate] = useState(1);  

  const handleMas = () => {
    if (rate < 8) {
      setRate(rate+1)
    } else {
      alert("No hay más stock")
    }
  }

  const handleRest = () => { 
    if (rate > 1) {
      setRate(rate-1)
    }
  }
    return (
        <>
        <div className='agregar-restar'>
          <button className="btn btn-dark cantMas" onClick={handleMas}>+</button> {rate} Unidades
          <button className="btn btn-dark cantMenos" onClick={handleRest}>-</button> 
        </div>
        </>
    );
}

export default Cant;
