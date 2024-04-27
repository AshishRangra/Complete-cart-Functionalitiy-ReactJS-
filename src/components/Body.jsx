import React, { useContext, useEffect} from "react";
import "./Body.css";
import { Context } from "../Context/Context";
const Body = () => {
  const { fetchData, products, addToCart } = useContext(Context);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {
          products.map((value, index) => (
          <div className="cards" key={index}>
            <img src={value.image} height={"200px"} width={"200px"} alt="" />
            <p>{value.title}</p>
            <p>{value.description}</p>
            <p>{value.price}</p>
            <p>{value.category}</p>
            <p>{value.rating.rate}</p>
            <button onClick={() => addToCart(value.id)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
