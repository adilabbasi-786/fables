import React, { createContext, useState } from "react";

export const CartContext = createContext();

function Cart(props) {
  const [cart, setCart] = useState([
    {
      title: "jacket",
      price: 29,
      quantity: 1,
      img: "https://www.pexels.com/photo/photography-of-guy-wearing-yellow-hoodie-1183266/",
    },
  ]);
  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default Cart;
