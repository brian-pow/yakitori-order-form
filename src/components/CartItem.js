import React from "react";

import mune from "../images/mune.png";
import quail_eggs from "../images/quail_eggs.png";
import tsukune from "../images/tsukune.png";

const CartItem = ({ item }) => {
  //Pull image based on selected item
  const getImage = () => {
    switch (item.name) {
      case "mune":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="cartItem__image"
            src={mune}
          />
        );
      case "tsukune":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="cartItem__image"
            src={tsukune}
          />
        );
      case "quail_eggs":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="cartItem__image"
            src={quail_eggs}
          />
        );
      default:
        return <div className="itemDetails__error">Error</div>;
    }
  };

  return (
    <div className="cartItem__container">
      {getImage()}
      <h3 className="cartItem__name">
        {item.fullName} x {item.quantity}
      </h3>
      <h3 className="cartItem__cost">${(item.cost * item.quantity) / 100}</h3>
    </div>
  );
};

export default CartItem;
