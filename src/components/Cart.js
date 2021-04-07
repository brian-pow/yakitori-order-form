import React from "react";

import CartItem from "./CartItem";

const Cart = ({ items }) => {
  //Calculate total price of cart items
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      let cost = item.quantity * item.cost;
      total = total + cost;
    });
    return total / 100;
  };

  return (
    <div className="cart__container">
      <div className="cart__containerTitle">CART</div>
      <div className="cart__itemsContainer">
        {items.map((item) => {
          return <CartItem key={item.name} item={item}></CartItem>;
        })}
        <div className="cart__totalContainer">
          <div className="cart__totalContainerLabel">TOTAL</div>
          <div className="cart__totalContainerValue">${calculateTotal()}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
