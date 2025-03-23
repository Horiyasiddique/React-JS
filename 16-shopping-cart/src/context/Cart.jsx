import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider