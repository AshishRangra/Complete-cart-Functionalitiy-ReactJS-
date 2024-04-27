import React, { useState } from "react";
import { Context } from "./Context";
import axios from "axios";

const Store = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  const [cartItem, setCartItem] = useState("");
  const addToCart = (id) => {
    setCartItem({ ...cartItem, [id]: (cartItem[id] || 0) + 1 });
  };
  console.log("CartItem", cartItem);
  const SelectedCartData = () => {
    const cartData = Object.keys(cartItem).map((value) => {
      const product = products.find((product) => product.id === parseInt(value));
      return {
        id: value,
        quantity: cartItem[value],
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
      };
    });
    setCartArr(cartData);
   
  };
  
  return (
    <Context.Provider
      value={{
        addToCart,
        cartItem,
        setCartItem,
        fetchData,
        products,
        SelectedCartData,
        cartArr,
        setCartArr
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
