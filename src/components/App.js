import React, { useState } from "react";

import Graphic from "./Graphic";
import Cart from "./Cart";

import "../styles/style.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartAddition = (item) => {
    //Check if item exists in cart
    let itemExistsInCart = false;
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === item.name) {
        setCartItems([
          ...cartItems.slice(0, i),
          item,
          ...cartItems.slice(i + 1),
        ]);
        itemExistsInCart = true;
      }
    }

    if (!itemExistsInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <div className="app__container">
      <h2 className="app__title">SELECT ITEMS TO ORDER</h2>
      <Graphic handleCartAddition={handleCartAddition} />
      <Cart items={cartItems} />
    </div>
  );
};

export default App;
