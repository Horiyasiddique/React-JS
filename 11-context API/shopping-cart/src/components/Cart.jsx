import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {
 const cart = useContext(CartContext);
 const total = cart.items.reduce((prev, curr) => prev + curr.price, 0)
  return (
    <div className="bg-blue-200">
      <h1>Cart</h1>
      {
        cart && cart.items.map((item) => (
          <li>{item.name} - {item.price}</li>
        ))
      }
      <h4>Total Bill: {total} </h4>
    </div>
  )
}

export default Cart
