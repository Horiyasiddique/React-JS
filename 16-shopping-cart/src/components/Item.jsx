import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = ({ name, price }) => {
  const cart = useContext(CartContext);
  console.log("cart ", cart);
  return (
    <div className="py-10 px-5 text-3xl bg-[#515151] text-white my-5 mx-5 inline-block">
      <h2>{name}</h2>
      <p>{price}</p>
      <button
        className="bg-[#f4f4f4] text-black my-4 p-5"
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
