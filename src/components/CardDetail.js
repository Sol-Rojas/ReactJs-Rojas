import Cant from "./Cant";

const CardDetail = ({item}) => {

  //Alerta por agregar al carrito
  const handleAdd = (id) => {
    alert(`Producto ${id} agregado al carrito`)
  }
    return (
        <div className="container-Detail">
            <img className="imgDetail" src={item.img} alt="producto"/>
            <div className="bodyDetail">
               <h3 className="card-title">{item.name}</h3>
               <p>{item.marca}</p>
               <p>{item.description}</p>
               <p>${item.precio}</p>
               <Cant  />
               <button className="btn btn-dark agregarCarrito"onClick={() => handleAdd(item.id)} > Agregar al carrito</button>
            </div>
        </div>
    );
}

export default CardDetail;
