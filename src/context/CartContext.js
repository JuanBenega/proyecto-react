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
        console.log(arts);
        setArtsAtCart(arts);
    }, [cart])

    // Incorporar un elemento al carrito
    const addToCart = (name, items, price, img, item, stock) => {
        let itemExist = false;
        if (items > 0) {
            for (const iterator of cart) {
                iterator.name === name
                    ? itemExist = true
                    : itemExist = false
            }
            itemExist
                ? alert('este producto ya existe en el carrito')
                : setCart(cart.concat({ item, name, quantity: items, price, img, stock }));
        }
    }

    // Remover un elemento del carrito
    const removeItem = (item) => {
        setCart(cart.filter((element) => element.item !== item));
    }

    // Vaciar el carrito de
    const clearCart = () => setCart([]);


    // const incrementToCart = (itemProduct) => {
    //     let index, filterCart=[];
    //     console.log(itemProduct);
    //     for (let x=0; x <= cart.length; x++) {
    //         console.log(cart[x].item);
    //         if (cart[x].item == itemProduct){
    //             index = x;
    //         }
    //     }
    //     let filterItem = cart.filter(element => element.item === itemProduct);
    //     if (cart.length > 1) {
    //         filterCart=cart.splice(index, 1);
    //     } 
    //     //console.log(`Cantidad: ${filterItem[0].quantity} - Stock: ${filterItem[0].stock}`);
    //     console.log(filterCart);
    //     filterItem[0].quantity < filterItem[0].stock
    //         ? filterItem[0].quantity++
    //         : alert ('No hay más productos en stock');
    //     filterCart=filterCart.concat(filterItem);
    //     setCart(filterCart);
    // }

    // const restToCart = (item) => {
    //     let itemToRest = cart[cart.IndexOff(item)];
    //     if (itemToRest>0) {

    //     }
    // }




    return (
        <CartContext.Provider value={{ addToCart, cart, removeItem, clearCart, artsAtCart }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;