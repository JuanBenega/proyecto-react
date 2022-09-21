import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (name, items, price) => {
        let itemExist = false;
        if (items > 0) {
        for (const iterator of cart) {
            iterator.name === name
                ? itemExist = true
                : itemExist = false
        }
        itemExist
            ? alert('este producto ya existe en el carrito')
            : setCart(cart.concat({ name: name, quantity: items, price: price }));
        }
    }





    return (
        <CartContext.Provider value={{ addToCart, cart }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;