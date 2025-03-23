import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Item name="Mac book" price="1000" />
      <Item name="IPhone" price="5000" />
      <Item name="Wireless Headphones" price="500" />
      <Item name="Earpods" price="200" />

      <Cart />
    </>
  );
}

export default App;
