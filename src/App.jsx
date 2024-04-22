import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

// styles
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Product cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
