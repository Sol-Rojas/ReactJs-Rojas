import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  container-fluid">
        <CartWidget/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav list">
            <li className="nav-item">
               <Link to="/" className='nav-link'>Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comprar</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/catg/1" className='dropdown-item'>Pianos</Link></li>
                <li><Link to="/catg/2" className='dropdown-item'>Guitarras</Link></li>
                <li><Link to="/catg/3" className='dropdown-item'>Instrumentos de viento</Link></li>
                <li><Link to="/catg/4" className='dropdown-item'>Percusion</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className='nav-link'>Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;