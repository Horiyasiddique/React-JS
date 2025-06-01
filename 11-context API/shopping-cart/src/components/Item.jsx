import { useContext } from "react";
import CartContext from "../context/CartContext";

const Item = ({ name, price, pic, description }) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="w-72 bg-[#f3f3f3] rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
      {/* Image Container */}
      <div className="relative aspect-square bg-white group">
        <img
          src={pic}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
        {/* Quick Actions (appear on hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <button className="bg-white/90 hover:bg-white text-[#E11D48] p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-gray-900 truncate">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 h-10">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[#E11D48] font-bold text-lg">${price}</span>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E11D48] hover:bg-[#C2185B] text-white transition-colors"
            onClick={() =>
              cart.setItems([...cart.items, { 'name': name, 'price': price }])
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
