import React from "react";
import "./CartProduct.css";
import { removeItem, increase, decrease } from "./features/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ item }) => {
  const { name, price, image_url, amount, total, id } = item;
  const dispatch = useDispatch();

  return (
    <div className="CartProduct">
      <img className="CartProduct-image" src={image_url} />
      <div>
        {" "}
        <h3 className="CartProduct-name">{name}</h3>
        <p className="CartProduct-price">${price} each</p>
      </div>

      <div className="CartProduct-btn-container">
        <button
          className="CartProduct-btn"
          onClick={() => dispatch(decrease(id))}
        >
          &#x25BC;
        </button>
        <span className="CartProduct-count">{amount}</span>
        <button
          className="CartProduct-btn"
          onClick={() => dispatch(increase(id))}
        >
          &#x25B2;
        </button>

        <br />
        <button
          className="CartProduct-remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
