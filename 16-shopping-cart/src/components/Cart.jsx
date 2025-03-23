import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart bg-blue-400">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}
      <h5 className="font-black">Total Bill : ${total}</h5>
    </div>
  );
};

export default Cart;
