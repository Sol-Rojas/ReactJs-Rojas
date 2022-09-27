import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const { cartList, clear, compraTotal, subTotalComp, descuentoTotal } = useContext(CartContext);

    return (
        <div className='container-prod rutaCard d-flex justify-content-center'>
            {cartList.length === 0 ?
                <div >
                    <h4 className="carrito-vacio">Tu carrito esta vacio</h4>
                    <Link to='/'><button className='btn btn-primary'>Ir a la tienda</button></Link>
                </div>
                :
                <div className= "d-flex">
                    <div>{cartList.map(element => <CartItem key={element.id} prod={element} count= {element.count} />)}</div>
                    <div className=" d-flex align-items-start">
                        <button className='btn btn-dark botonBrown' onClick={() => clear()}>Vaciar carrito</button>                  
                        <div className='ordenCompra'>
                            <h4 className="titleBuy">Orden de compra</h4>
                            <p className="card-text">Subtotal: ${subTotalComp()}</p>
                            <p className="card-text borderBotom">Descuento: -${descuentoTotal()}</p>
                            <b >Importe total: ${compraTotal()}</b>
                            <button className='btn btn-darkk comprarCarrito'>Finalizar compra</button> 
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;
