import PropTypes from "prop-types";
import CartItem from "./CartItem";

function Cart({ cart }) {
  const handleRemoveItem = (item) => {
    // Implement logic to remove item from cart
    // For now, let's just log the item being removed
    console.log("Removing item:", item);
    // Here you can update the cart state to remove the item
    // Example:
    // setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onRemoveItemClick={handleRemoveItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
