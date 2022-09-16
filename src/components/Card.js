const Card = ({product}) => {

  //Alerta por realizar compra
  const handleBuy = (id) => {
    alert(`Producto ${id} comprado`)
  }

    return (
      <>
      <div className='card'>
        <img className='product' src={product.img} alt="producto" />
        <button className="btn btn-dark">Ver detalles</button>
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
