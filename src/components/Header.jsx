import { useState } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

// styles
import "../App.css";

function Header({ cart }) {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    setCartVisible((prevVisible) => !prevVisible);
  };

  const handleRemoveItem = (item) => {
    console.log("Removing item:", item);
  };

  return (
    <header className="header-line">
      <div className="mr-16" onClick={handleCartClick}>
        <h4>My Cart</h4>
      </div>
      {cartVisible && (
        <div className="cart-container">
          <ul className="cart-list">
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
