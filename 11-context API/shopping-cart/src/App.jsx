import Cart from "./components/Cart";
import Item from "./components/Item";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div className="flex justify-center items-center gap-10 mt-10 flex-wrap max-w-screen min-h-screen">
      <Item
        pic={
          "https://cdn.pixabay.com/photo/2013/10/09/04/45/lipstick-193003_640.jpg"
        }
        name={"Lipstick"}
        price={"$15"}
        description={
          "Shocking pink colored lipstick which makes your lips gorgeous!"
        }
      />
      <Item
        pic={
          "https://cdn.pixabay.com/photo/2021/11/25/20/26/eye-shadow-6824528_640.jpg"
        }
        name={"Blush"}
        price={"$35"}
        description={
          "3 soft shades Blush-On kit with one brush."
        }
      />
      <Item
        pic={
          "https://cdn.pixabay.com/photo/2021/04/22/11/47/eye-shadows-6198839_640.jpg"
        }
        name={"Eye Shadows kit"}
        price={"$40"}
        description={
          "glitter Eye Shadows soft and stunning!"
        }
      />
      <Item
        pic={
          "https://cdn.pixabay.com/photo/2018/09/29/20/38/beauty-3712239_640.jpg"
        }
        name={"Nail Paints"}
        price={"$55"}
        description={
          "4 Nail Paints bottles which makes your nails gorgeous!"
        }
      />
      <Item
        pic={
          "https://cdn.pixabay.com/photo/2015/04/01/12/07/eyeliner-702257_1280.jpg"
        }
        name={"Eye Liner"}
        price={"$10"}
        description={
          "Black Eye liner with thin and amzing tip"
        }
      />
      </div>

      <Cart />
      
    </CartContextProvider>
  );
}

export default App;
