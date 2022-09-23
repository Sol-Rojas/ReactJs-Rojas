import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ prod }) => {

    const { deleteProduct } = useContext(CartContext);

    return (
            <div className="card prod-carrito mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prod.item.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.item.name}</h5>
                            <p className="card-text">{prod.item.marca}</p>
                            <p className="card-text"><small className="text-muted">Precio: {prod.item.precio}</small></p>
                            <button className='btn btn-dark' onClick={() => deleteProduct(prod.item.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default CartItem;

