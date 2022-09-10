

const ItemListContainer = (props) => {
    return (
        <>
      <div className='card'>
        <img className='product' src={props.img} alt="..." />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.marca}</p>
          <a className="btn btn-dark" href="#"> Ir a comprar</a>
        </div>
      </div>           
        </>
    );
}

export default ItemListContainer;
