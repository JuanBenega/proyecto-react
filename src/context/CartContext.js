import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (name, items, price, img, item) => {
        let itemExist = false;
        if (items > 0) {
        for (const iterator of cart) {
            iterator.name === name
                ? itemExist = true
                : itemExist = false
        }
        itemExist
            ? alert('este producto ya existe en el carrito')
            : setCart(cart.concat({ item, name, quantity: items, price, img}));
        }
    }

    const removeItem = (item) => {
        setCart(cart.filter((element)=> element.item !== item));
    }

    // const restToCart = (item) => {
    //     let itemToRest = cart[cart.IndexOff(item)];
    //     if (itemToRest>0) {

    //     }
    // }

    const clearCart =() => setCart([]);


    return (
        <CartContext.Provider value={{ addToCart, cart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;