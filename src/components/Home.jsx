import React from "react";
import Body from "./Body";
import { Link } from "react-router-dom";
// import "./Body.css";
import { CiShoppingCart } from "react-icons/ci";
const Home = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/cart">
          <CiShoppingCart className="cartIcon" size={50} />
        </Link>
      </div>
      <div>
        <Body />
      </div>
    </>
  );
};

export default Home;
