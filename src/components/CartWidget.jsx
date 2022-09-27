import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const CartWidgdet = () => {
    const { totalProductsQty } = useContext(CartContext)
    return (
     <>
        <div className="navtop">
            <Link to="/" className='navbar-brand'>SOUNDSARC</Link>
            <form>
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <Link to="/cart" className='navbar-brand'>            
                <div className="cart">
                    <img src="https://img.icons8.com/ios-filled/38/f0f8ff/shopping-cart.png"/>
                    <span className="carrito">{totalProductsQty()|| '!'}</span>               
                </div>
            </Link>
       </div>
     </>
    );
}

export default CartWidgdet;
