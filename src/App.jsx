import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

// styles
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Product cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
