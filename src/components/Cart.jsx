import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Swal from 'sweetalert2'

const Cart = () => {

    const { cartList, clear, compraTotal, subTotalComp, descuentoTotal } = useContext(CartContext);

    // Input nombre de usuario
    const textoValido = (texto) => { 
        return texto.split("").some(elemento => elemento !== " ")
    }

    // Input numero de teléfono
    const numeroValido = (numero) => { 
        return numero.split("").some(elemento => (isNaN(parseInt(elemento)) === false) )
    }

    // Input Email
    const mailValido = (mail) => {
        const mailConArroba = mail.split("").some(elemento => elemento === "@")

        const mailConPunto = mail.split("").some(elemento => elemento === ".")

        return (mailConArroba && mailConPunto)
    }

    const ordenDeCompra = async (e) => {

        e.preventDefault()

        const form = document.getElementById("formOrden")

        const nombreForm = form.children[0].value

        const telefonoForm = form.children[1].value

        const mailForm = form.children[2].value

        // Crear orden de compra solo cuando los datos ingresados sean válidos
        if (textoValido(nombreForm) && numeroValido(telefonoForm) && mailValido(mailForm)) { 
            
            const itemsFiltrados = cartList.map(producto => ( 
                {
                    id : producto.id,
                    name: producto.name,
                    precio: producto.precio,
                    quantity: producto.count
                }
            ))
            
            const orden = {
                // Datos ingresados por el usuario
                buyer : { 
                    name : nombreForm,
                    phone : telefonoForm,
                    email : mailForm
                },

                items : itemsFiltrados,
                date : serverTimestamp(),
                total : compraTotal(),
            }

            const newOrderRef = doc(collection(db, "orders")) 
            await setDoc(newOrderRef, orden) 
            
            Swal.fire({
                icon: 'success',
                title: '¡Compra exitosa!',
                text: `Guarda el ID de tu compra : ${newOrderRef.id}`,
                width: '27rem' ,
                padding: '33px',
                color: '#000',
                background: ' rgb(181 235 174)'
            })
            
            cartList.forEach( async producto => {
                const productoRef = doc(db, "instrumentos", producto.id) 
                await updateDoc(productoRef, { 
                    // Restar el stock de la cantidad comprada
                    stock : increment(-producto.count) 
                })
            })

            clear()

        } else {

            Swal.fire({
                icon: 'warning',
                title: 'Datos incorrectos',
                width: '27rem',
                padding: '33px',
                color: '#000',
                background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
            })
        }
    }

    return (
        <div className='container-prod rutaCard d-flex justify-content-center'>
            {(cartList.length === 0) ?
                <div >
                    <h4 className="carrito-vacio">Tu carrito esta vacio</h4>
                    <Link to='/'><button className='btn btn-primary'>Ir a la tienda</button></Link>
                </div>
                :
                <div className= "d-flex">
                    <div>
                        {cartList.map(element => 
                            <CartItem 
                            key = {element.id} 
                            id = {element.id}
                            img = {element.img}
                            name = {element.name}
                            count = {element.count}
                            marca = {element.marca}
                            precio = {element.precio} />
                        )}
                    </div>
                    <div className=" d-flex align-items-start">
                        <button className='btn btn-dark botonBrown' onClick={() => clear()}>Vaciar carrito</button>                  
                        <div className='ordenCompra'>
                            <h4 className="titleBuy">Orden de compra</h4>
                            <form id="formOrden">
                               <input type="text" className="inputBuy" placeholder="Nombre" />
                               <input type="number" className="inputBuy" placeholder="Teléfono" />
                               <input type="email" className="inputBuy" placeholder="Email" />
                            </form>
                            <p className="card-text">Subtotal: ${subTotalComp()}</p>
                            <p className="card-text borderBotom">Descuento: -${descuentoTotal()}</p>
                            <b >Importe total: ${compraTotal()}</b>                            
                            <button className='btn btn-darkk comprarCarrito'onClick={(e) => ordenDeCompra(e)} >Finalizar compra</button> 
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;
