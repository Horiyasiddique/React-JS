import { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([])
  return (
    <CartContext.Provider value={{items, setItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
