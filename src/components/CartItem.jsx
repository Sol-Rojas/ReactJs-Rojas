import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ prod }) => {

    const { deleteProduct, subTotalProd } = useContext(CartContext);

    return (
            <div className="card prod-carrito mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prod.img} className="img-fluid rounded-start" alt={prod.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">{prod.marca}</p>
                            <p className="card-text"><small>Precio: {prod.precio}</small></p>
                            <p className="card-text">Cantidad: {prod.count}</p> 
                            <p className="card-text">SubTotal: {subTotalProd (prod.id)}</p>
                            <button className='btn btn-dark botonBrown' onClick={() => deleteProduct(prod.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default CartItem;

