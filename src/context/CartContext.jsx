import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const swal = () => {
        Swal.fire({
            icon: 'success',
            title: 'Añadido al carrito',
            width: '27rem' ,
            padding: '33px',
            color: '#000',
            background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
        })
    }

    const addProduct = (prod, count) => {

        if (isInCart(prod.id)) {

            const index = cartList.findIndex(item => item.id === prod.id)

            if (prod.stock >= cartList[index].count + count) {

                swal()                
                cartList[index].count += count

            } else if ((prod.stock < cartList[index].count + count) && (prod.stock !== cartList[index].count)) { 

                swal()
                cartList[index].count = prod.stock

            } else { 
                Swal.fire({
                    icon: 'error',
                    title: 'Sin stock',
                    width: '27rem',
                    padding: '33px',
                    color: '#000',
                    background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
                })
            }

            setCartList([...cartList])

        } else { 

            prod.count = count

            setCartList([...cartList, prod])
            swal()
        }
    }

    const isInCart = (id) => {
        return cartList.some(item => item.id === id)
    }

    const subTotalProd = (id) => {
        const index = cartList.map(prod => prod.id).indexOf(id);

        return cartList[index].precio * cartList[index].count;
    }

    const subTotalComp = () => {
        const total = cartList.map(prod => subTotalProd(prod.id));

        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const descuentoFirst = () => {
        return subTotalComp() - 600;
    }
    const descuentoTotal = () => {
        return subTotalComp() - descuentoFirst();
    }

    const compraTotal = () => {
        return subTotalComp() - descuentoTotal();
    }

    const deleteProduct = (id) => {
        const index = cartList.findIndex(prod => prod.id === id)

        cartList.splice(index, 1)
        
        setCartList([...cartList])
    }

    const clear = () => {
        setCartList([])
    }

    const totalProductsQty = () => cartList.reduce((cant, productoActual) => cant + productoActual.count, 0)

    const accions = {
        cartList,
        addProduct,
        isInCart,
        subTotalProd,
        subTotalComp,
        compraTotal,
        descuentoTotal,
        deleteProduct,
        clear,
        totalProductsQty
    }

    return (
        <CartContext.Provider value={accions}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
