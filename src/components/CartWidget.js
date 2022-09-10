const CartWidgdet = () => {
    return (
     <>
        <div className="navtop">
            <a className="navbar-brand" href="#">SOUNDSARC</a>
            <form>
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="cart">
                <a  className="nav-link" href="#">
                  <img src="https://img.icons8.com/ios-filled/35/f0f8ff/shopping-cart.png"/>
                  <span className="carrito">8</span>
                </a>
            </div>
       </div>
     </>
    );
}

export default CartWidgdet;
