import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/** NavBar Component
 *
 * displays store logo, links to shop and shopping cart
 *
 *
 * calculates total amount of items in shopping cart to display in the navbar
 */

const NavBar = () => {
  const { cartItems } = useSelector((store) => store.cart);

  let amount = 0;
  cartItems.forEach((item) => {
    amount += item.amount;
  });

  return (
    <div className="NavBar">
      <Link to="/">
        <img src={require("./images/storelogo.png")} />
      </Link>
      <nav className="NavBar-nav">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/cart">
              {amount} <i className="fa fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
