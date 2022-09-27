import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([])

    const addProduct = (prod, count) => {

        if(isInCart(prod.id)) {

            setCartList(cartList.map(item => {
                return item.id === prod.id ? { ...item, count: item.count + count } : item
            }));

        } else {

            setCartList([...cartList, {...prod, count}]);
        }
    }

    // Si el producto ya se encuentra en el carrito aumenta la cantidad
    const isInCart = (id) => cartList.find(prod => prod.id === parseInt(id)) ? true : false;

    // Subtotal de los productos
    const subTotalProd = (id) => {
        const index = cartList.map(prod => prod.id).indexOf(id);

        return cartList[index].precio * cartList[index].count;
    }

    // Subtotal de la compra
    const subTotalComp = () => {
        const total = cartList.map(prod => subTotalProd(prod.id));

        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    
    // Descuento por compra
    const descuentoFirst = () => {
        return subTotalComp() - 600 ;
    }
    const descuentoTotal = () => {
        return subTotalComp() - descuentoFirst();
    }

    // Importe total
    const compraTotal = () => {
        return subTotalComp() - descuentoTotal();
    }

    // Eliminar producto del carrito
    const deleteProduct = (id) => setCartList(cartList.filter((prod) => prod.id !== id));

    // Vaciar carrito
    const clear = () => {
        setCartList ([])
    }

    // Cantidad de productos en carrito
    const totalProductsQty = () => cartList.reduce((cant, productoActual) => cant + productoActual.count, 0)

    // Container de funciones
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

    return(
        <CartContext.Provider value={accions}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
