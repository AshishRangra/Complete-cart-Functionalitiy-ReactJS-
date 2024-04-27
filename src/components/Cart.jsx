import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import "./Body.css";
const Cart = () => {
  const { SelectedCartData, cartArr, setCartArr, cartItem, setCartItem } =
    useContext(Context);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    SelectedCartData();
  }, []);
  const totalPriceofProducts = () => {
    let productPrice = 0;
    cartArr &&
      cartArr.map((value, index) => {
        productPrice += value.price * value.quantity;
        return price;
      });
    setPrice(Math.round(productPrice));
  };
 
  const increment = (id) => {
    const updatedCartArr = cartArr.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
    );
    setCartArr(updatedCartArr);
    const updatedCartItem = { ...cartItem };
    updatedCartItem[id] += 1;
    setCartItem(updatedCartItem);
  };
  const decrement = (id) => {
    const updatedCartArr = cartArr.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartArr(updatedCartArr);
    const updatedCartItem = { ...cartItem };
    updatedCartItem[id] -= 1;
    setCartItem(updatedCartItem);
    // totalPriceofProducts();
  };
  useEffect(() => {
    totalPriceofProducts();
  }, [cartArr, increment, decrement]);
  const RemoveItem = (id) => {
    const updatedArr = cartArr.filter((item) => item.id !== id);
    setCartArr(updatedArr);
    const updatedCartItem = { ...cartItem };
    delete updatedCartItem[id];
    setCartItem(updatedCartItem);
  };

  return (
    <>
      <h1>Cart</h1>
      <div id="cart-container" className="container">
        {cartArr &&
          cartArr.map((value, index) => (
            <div className="cards" key={index}>
              <img src={value.image} alt="" width={"100px"} height={"100px"} />
              <p>{value.title}</p>

              <p>{value.price}</p>
              <button onClick={() => increment(value.id)}>+</button>
              {value.quantity}
              <button
                onClick={() => decrement(value.id)}
                disabled={value.quantity < 2}
              >
                -
              </button>
              <button onClick={() => RemoveItem(value.id)}>Remove</button>
            </div>
          ))}
      </div>
      <div className="totalPrice">
      
        <h5>
          Total Price : <span>{price}</span>{" "}
        </h5>
      </div>
    </>
  );
};

export default Cart;
