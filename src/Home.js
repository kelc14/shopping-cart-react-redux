import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Store!</h1>
      <Link to="/shop">Shop Now</Link>
    </div>
  );
};

export default Home;
