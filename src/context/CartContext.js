import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [artsAtCart, setArtsAtCart] = useState(0)

    // Contar cantidad de elementos en el carrito para el CartWidget
    useEffect(() => {
        let arts = 0;
        cart.forEach(element => {
            arts += element.quantity;
        });
        setArtsAtCart(arts);
    }, [cart])

    // Incorporar un elemento al carrito
    const addToCart = (name, items, price, img, item, stock, showToast, showMessage) => {
        let itemExist = false;
        if (items > 0) {
            for (const iterator of cart) { //recorro el carrito para verificar si existe
                iterator.name === name
                    ? itemExist = true
                    : itemExist = false
            }
            if (itemExist) {
                showMessage("error", "Este producto ya se encuentra en el carrito", false);
            } else {
                setCart(cart.concat({ item, name, quantity: items, price, img, stock }));
                showToast(true);
                setTimeout(() => {
                    showToast(false)
                }, 2000);
            }
        }
    }

    // Remover un elemento del carrito
    const removeItem = (item) => {
        setCart(cart.filter((element) => element.item !== item));
    }

    // Vaciar el carrito de
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ addToCart, cart, removeItem, clearCart, artsAtCart }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;