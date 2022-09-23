import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([])

    const addProduct = (prod, count) => {

        if (isInCart(prod.id)) {
            const indexItem = cartList.findIndex(pd => pd.item.id === prod.id);
            
            cartList[indexItem].count = cartList[indexItem].count + count;

            setCartList([...cartList])

        } else {
            
            const newProduct = {
              item: prod,
              count
            }
            setCartList([...cartList, newProduct])
        }
    }

    const isInCart = (id) => {
        return cartList.some(prod => prod.item.id === id)
    }

    // Eliminar producto del carrito
    const deleteProduct = (id) => {
        const updatedCart = cartList.filter(prod => prod.item.id !== id)
        setCartList(updatedCart);
    }

    // Vaciar carrito
    const clear = () => {
        setCartList ([])
    }

    // Contener de funciones
    const accions = {
        cartList,
        addProduct, 
        clear,
        deleteProduct,
        isInCart
    }

    return(
        <CartContext.Provider value={accions}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
