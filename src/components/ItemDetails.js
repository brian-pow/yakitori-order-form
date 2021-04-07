import React from "react";

import mune from "../images/mune.png";
import quail_eggs from "../images/quail_eggs.png";
import tsukune from "../images/tsukune.png";

const ItemDetails = ({ item, handleCartAddition }) => {
  //Pull image based on selected item
  const getImage = (name) => {
    switch (name) {
      case "mune":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="itemDetails__image"
            src={mune}
          />
        );
      case "tsukune":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="itemDetails__image"
            src={tsukune}
          />
        );
      case "quail_eggs":
        return (
          <img
            alt={item.name}
            name={item.name}
            className="itemDetails__image"
            src={quail_eggs}
          />
        );
      default:
        return <div className="itemDetails__error">Error</div>;
    }
  };

  //Pass up to App component
  const addItemToCart = (itemToAdd, quantity) => {
    itemToAdd.quantity = quantity;
    handleCartAddition(itemToAdd);
  };

  return (
    <React.Fragment>
      <div className="itemDetails__imageContainer">{getImage(item.name)}</div>
      <h3 className="itemDetails__name">{item.fullName}</h3>
      <h4 className="itemDetails__description">{item.description}</h4>
      <h4 className="itemDetails__cost">${item.cost / 100}</h4>
      <p className="itemDetails__quantityMessage">SELECT QUANTITY:</p>
      <div className="itemDetails__quantityContainer">
        <div
          onClick={() => addItemToCart(item, 1)}
          className="itemDetails__quantityOption"
        >
          1
        </div>
        <div
          onClick={() => addItemToCart(item, 2)}
          className="itemDetails__quantityOption"
        >
          2
        </div>
        <div
          onClick={() => addItemToCart(item, 3)}
          className="itemDetails__quantityOption"
        >
          3
        </div>
        <div
          onClick={() => addItemToCart(item, 4)}
          className="itemDetails__quantityOption"
        >
          4
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;
