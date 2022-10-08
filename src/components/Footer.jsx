const Footer = () => {
    return (
        <footer>
            <div className="web-map">
                <ul>
                    <li className="text">Visita nuestro local</li>
                    <li className="text">Lunes a viernes de 8 a 18hs.</li>
                </ul>
                <ul className="links">
                    <li className="text">ACERCA DE SOUNDSARC</li>
                    <li className="small-link">Privacidad y terminos</li>
                    <li className="small-link">Centro de ayuda</li>
                    <li className="small-link">Preferencias</li>
                </ul>
            </div>
            <div className="social-icons">
                <h5 className="text">Métodos de pago</h5>
                <ul>
                    <li>
                        <img src="https://img.icons8.com/color/50/000000/paypal.png" alt="icono Paypal" />                      
                    </li>
                    <li>
                        <img src="https://img.icons8.com/color/60/000000/mercado-pago.png" alt="icono Mercadopago" />
                    </li>
                    <li>
                        <img src="https://img.icons8.com/fluency/60/000000/mastercard.png" alt="icono Mastercard" />
                    </li>
                </ul>
            </div>
            <div className="social-icons">
                <h5 className="text">Síguenos</h5>
                <ul>
                    <li>
                        <a href="https://twitter.com/SolRojaass">
                            <img className="twiterfb" src="https://img.icons8.com/ios-filled/50/faebd7/twitter-circled--v1.png" alt="icono Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com">
                            <img className="twiterfb" src="https://img.icons8.com/glyph-neue/50/faebd7/facebook-new.png" alt="icono Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sol.rojaass/">
                            <img className="insta" src="https://img.icons8.com/glyph-neue/50/faebd7/instagram-new.png" alt="icono Instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
