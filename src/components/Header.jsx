import { useState } from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

// styles
import "../App.css";

function Header({ cart }) {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    // Toggle the visibility of the cart
    setCartVisible((prevVisible) => !prevVisible);
  };

  return (
    <header className="header-line">
      <div className="mr-16" onClick={handleCartClick}>
        <h4>My Cart</h4>
      </div>
      {/* Render the cart component conditionally based on the state */}
      {cartVisible && <Cart cart={cart} />}
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
