import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { clearCart } from "./features/cartSlice";
import { useDispatch } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  let total = 0;
  cartItems.forEach((item) => {
    total += item.amount * item.price;
  });
  let totalPrice = total.toFixed(2);

  if (cartItems.length < 1) {
    return (
      <div className="Cart-container">
        <h2 className="Cart-header">Your Bag</h2>
        <h4>is currently empty</h4>
      </div>
    );
  }

  return (
    <>
      <div className="Cart-container">
        <h2 className="Cart-header">Your Bag</h2>
        <div className="Cart-product-container">
          {cartItems.map((item) => (
            <CartProduct id={item.id} item={item} key={item.id} />
          ))}
        </div>
      </div>
      <hr />
      <div className="Cart-total">
        <h4 className="Cart-total">
          Total <span>${totalPrice}</span>
        </h4>
      </div>
      <button className="Cart-clear-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
