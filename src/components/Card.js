import { useState } from "react"
const Card = ({name, id, img, marca, precio}) => {

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
  const handleBuy = (id) => {
    alert(`Producto ${id} comprado`)
  }

    return (
      <>
      <div className='card'>
        <img className='product' src={img} alt="producto" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{marca}</p>
          <p className="">{precio}</p>
          <button className="btn btn-dark" onClick={handleMas}>+</button> {rate} Unidades
          <button className="btn btn-dark" onClick={handleRest}>-</button> 
          <button className="btn btn-dark buy" onClick={() => handleBuy(id)}> Comprar</button>
        </div>
      </div>           
      </>
    );
}

export default Card;
