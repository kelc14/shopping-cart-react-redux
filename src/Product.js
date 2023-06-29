import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increase, decrease } from "./features/cartSlice";

const Product = ({ productData, id }) => {
  const { description, image_url, name, price } = productData;
  let product = { ...productData, id };
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);

  let productInCart = cartItems.filter((item) => item.id === id);

  return (
    <div className="Product">
      <h3 className="Product-name">{name}</h3>
      <p className="Product-price">${price}</p>
      <img className="Product-image" src={image_url} alt={name} />
      <p className="Product-description">{description}</p>

      <div className="Product-btn-container">
        {productInCart.length === 0 && (
          <button
            className="Product-btn"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        )}
        {productInCart.length !== 0 && (
          <div className="Product-btn-container">
            <button
              className="Product-btn-toggle"
              onClick={() => dispatch(decrease(id))}
            >
              &#x25BC;
            </button>
            <span className="Product-btn-toggle">
              {productInCart[0].amount}
            </span>
            <button
              className="Product-btn-toggle"
              onClick={() => dispatch(increase(id))}
            >
              &#x25B2;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
