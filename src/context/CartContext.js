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
        let listItem=[];
        for (const prod of cart) {
            prod.item !== item && listItem.push(prod)
        }
        setCart(listItem);
    }

    // const restToCart = (item) => {
    //     let itemToRest = cart[cart.IndexOff(item)];
    //     if (itemToRest>0) {

    //     }
    // }



    return (
        <CartContext.Provider value={{ addToCart, cart, removeItem }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;