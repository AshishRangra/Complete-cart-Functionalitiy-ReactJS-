import React, { useContext, useState } from "react";
import Body from "./Body";
import { Link } from "react-router-dom";
import "./Body.css";
import { CiShoppingCart } from "react-icons/ci";
import { Context } from "../Context/Context";
const Home = () => {
  const {cartItem}=useContext(Context);
  // const [countCartProducts,setCountCartProducts]=useState('');
  // const totalSelectedProducts=(productsCount)=>{
  //   setCountCartProducts(productsCount)
  // }
  
  return (
    <>
      <div className="navbar">
        <Link to="/cart">
          <CiShoppingCart className="cartIcon" size={50} />
        </Link><span className="cartCount">{Object.keys(cartItem).length}</span>
      </div>
      <div>
        <Body />
      </div>
    </>
  );
};

export default Home;
