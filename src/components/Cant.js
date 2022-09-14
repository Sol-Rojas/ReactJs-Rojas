import React, { useState } from 'react';

const Cant = () => {
    
  // Botones para unidades del producto
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
          <button className="btn btn-dark" onClick={handleMas}>+</button> {rate} Unidades
          <button className="btn btn-dark" onClick={handleRest}>-</button> 
        </>
    );
}

export default Cant;
