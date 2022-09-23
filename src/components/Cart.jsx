import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const { cartList, clear } = useContext(CartContext);

    return (
        <div className='container-prod rutaCard d-flex justify-content-center'>
            {cartList.length === 0 ?
                <div >
                    <h4 className="carrito-vacio">Tu carrito esta vacio</h4>
                    <Link to='/'><button className='btn btn-dark'>Volver a la tienda</button></Link>
                </div>
                :
                <div className= "d-flex cartBody ">
                    <div>{cartList.map(element => <CartItem key={element.item.id} prod={element} />)}</div>
                    <div className=" d-flex align-items-start">
                        <button className='btn btn-dark botonVaciar' onClick={() => clear()}>Vaciar carrito</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;
