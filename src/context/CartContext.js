// 1
import { createContext, useState } from "react";

// 2
const CartContext = createContext();

// 4 
// cosa sto facendo?
// creo un componente in modo da usarlo in giro
// ogni cosa che wrapperò dentro a CartContext.Provider avrà accesso ai valori che gli metto:
// in questo caso value={{ item: 1 }}

// children saranno i componenti o codice jsx che metterò dentro
export function CartProvider({ children }) {

    const [ favItems, setFavItems ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    const [ numItemsCart, setNumItemsCart ] = useState(0)
 

    const addToCart = (product) => {

        let alreadyInCartPosition = cartItems.findIndex(
            (el) => el.id === product.id
        );

        if (alreadyInCartPosition === -1) {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        } else {
            cartItems[alreadyInCartPosition].quantity++;
        }

       setNumItemsCart(
            cartItems.reduce(
            (partialSum, cartProduct) =>
                partialSum + cartProduct.quantity,
                1
        ))
        
    }
    
    const addToFav = (prodotto) => {
        let alreadyInCartPosition = favItems.findIndex(
            (el) => el.id === prodotto.id
        );
    
        if (alreadyInCartPosition === -1) {
            setFavItems([...favItems, { ...prodotto }]);
        } else {
            setFavItems([...favItems]);
        }
    }


    const updateQuantity = (id, operation) => {
        let alreadyInCartPosition = cartItems.findIndex((el) => el.id === id);

        if (operation === "+") {
            cartItems[alreadyInCartPosition].quantity++
        } else if (operation === '-' && cartItems[alreadyInCartPosition].quantity === 1) {
            cartItems[alreadyInCartPosition].quantity = 1
        } else {
            cartItems[alreadyInCartPosition].quantity--
        }

        if (cartItems[alreadyInCartPosition].quantity === 1) {
            cartItems[alreadyInCartPosition].quantity = 1;
        }

        setCartItems([...cartItems]);        
    };

    const removeItemFromCart = (id) => {
        let alreadyInCartPosition = cartItems.findIndex((el) => el.id === id);
        cartItems.splice(alreadyInCartPosition, 1);
        setCartItems([...cartItems]);
    };

    const removeItemFromFav = (id) => {
        let alreadyInCartPosition = favItems.findIndex((el) => el.id === id);
        favItems.splice(alreadyInCartPosition, 1);
        setFavItems([...favItems]);
    };

    const [total, setTotal] = useState(0)

    const getTotal = () => {
        let sum = 0;
        cartItems.forEach((element) => {
            sum = sum + element.price * element.quantity;
        });
        setTotal(sum.toFixed(2)); 
    };

 

    return (
         <CartContext.Provider value={{ cartItems, favItems, addToCart, addToFav, updateQuantity, removeItemFromCart, removeItemFromFav, getTotal, total, numItemsCart }}>
            {children}
        </CartContext.Provider>
    );
}

// 3
 export default CartContext;