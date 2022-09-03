const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  container-fluid">
        <div className="navtop">
          <a className="navbar-brand" href="#">SOUNDSARC</a>
          <form>
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav list">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comprar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;