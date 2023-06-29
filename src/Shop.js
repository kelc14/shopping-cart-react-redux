import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

const Shop = () => {
  const { products } = useSelector((store) => store.product);
  return (
    <>
      <h1>Shop</h1>
      {Object.keys(products).map((key) => (
        <Product productData={products[key]} key={key} id={key} />
      ))}
    </>
  );
};

export default Shop;
