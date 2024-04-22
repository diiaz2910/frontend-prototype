import { useState } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

// styles
import "../App.css";

function Header({ cart }) {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    // activar visibilidad del carrito
    setCartVisible((prevVisible) => !prevVisible);
  };

  const handleRemoveItem = (item) => {
    console.log("Removing item:", item);
    // lógica para eliminar un elemento del carrito
  };

  return (
    <header className="header-line">
      <div className="mr-16" onClick={handleCartClick}>
        <h4>My Cart</h4>
      </div>
      {/* Renderizar el carrito condicionalmente */}
      {cartVisible && (
        <div>
          <h1>Cart</h1>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveItemClick={handleRemoveItem}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
