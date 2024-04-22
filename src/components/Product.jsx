import { useEffect, useState } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
function Product({ setCart }) {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartClick = () => {
    if (selectedSize && product) {
      setCart((prevCart) => [
        ...prevCart,
        {
          size: selectedSize,
          quantity: 1,
          imageURL: product.imageURL, // Add imageURL to the cart item
          title: product.title, // Add title to the cart item
          price: product.price, // Add price to the cart item
        },
      ]);
    }
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={product?.imageURL} alt={product?.title} />
      </div>
      <div className="product-info">
        <h2> {product?.title} </h2>
        <p> ${product?.price} </p>
        {product?.description && <p>{product.description}</p>}
        <div className="sizes">
          {product?.sizeOptions?.map((size) => (
            <button key={size.id} onClick={() => handleSizeClick(size.label)}>
              {size.label}
            </button>
          ))}
          {selectedSize && <p>Selected size: {selectedSize}</p>}
        </div>
        <div className="mt-16">
          <button onClick={handleAddToCartClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
