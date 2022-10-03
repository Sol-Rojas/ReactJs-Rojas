import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, img, marca, precio, count }) => {

    const { deleteProduct, subTotalProd } = useContext(CartContext);

    return (
            <div className="card prod-carrito mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${img}`}className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{marca}</p>
                            <p className="card-text"><small>Precio: {precio}</small></p>
                            <p className="card-text">Cantidad: {count}</p> 
                            <p className="card-text">SubTotal: {subTotalProd (id)}</p>
                            <button className='btn btn-dark botonBrown' onClick={() => deleteProduct(id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default CartItem;

