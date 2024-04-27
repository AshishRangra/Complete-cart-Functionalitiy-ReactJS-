import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

const Cart = () => {
  const { SelectedCartData, cartArr, setCartArr, cartItem, setCartItem } =
    useContext(Context);
  

  useEffect(() => {
    SelectedCartData();
  }, []);

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
  };

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
      <div className="cart-container">
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
    </>
  );
};

export default Cart;
