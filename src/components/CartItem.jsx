import PropTypes from "prop-types";

function CartItem({ item, onRemoveItemClick }) {
  const handleRemoveItemClick = () => {
    onRemoveItemClick(item);
  };

  return (
    <li>
      <div>
        <img src={item.imageURL} alt={item.title} className="cart-item-image" />
        <div>
          <p>{item.title}</p>
          <p>Size: {item.size}</p>
          <p>Price: {item.price}</p>
        </div>
      </div>
      <button onClick={handleRemoveItemClick}>Remove</button>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItemClick: PropTypes.func.isRequired,
};

export default CartItem;
