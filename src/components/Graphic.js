import React, { useState } from "react";

import Modal from "./Modal";
import ItemDetails from "./ItemDetails";
import data from "../data/data";

import yakitoriGrill from "../images/yakitori_grill.png";
import mune from "../images/mune.png";
import quail_eggs from "../images/quail_eggs.png";
import tsukune from "../images/tsukune.png";

const Graphic = ({ handleCartAddition }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (e) => {
    const selectedItemData = data.filter((data) => data.name === e.target.name);
    setSelectedItem(selectedItemData[0]);
  };

  const passCartAddition = (item) => {
    handleCartAddition(item);
    setSelectedItem(null);
  };

  return (
    <React.Fragment>
      {selectedItem ? (
        <Modal>
          <ItemDetails
            handleCartAddition={passCartAddition}
            item={selectedItem}
          />
        </Modal>
      ) : null}
      <div className="graphic__container">
        <img alt="grill" className="graphic__grill" src={yakitoriGrill} />
        <img
          name="mune"
          alt="mune"
          onClick={(e) => selectItem(e)}
          className="graphic__mune"
          src={mune}
        />
        <img
          name="quail_eggs"
          alt="quail_eggs"
          onClick={(e) => selectItem(e)}
          className="graphic__quail_eggs"
          src={quail_eggs}
        />
        <img
          name="tsukune"
          alt="tsukune"
          onClick={(e) => selectItem(e)}
          className="graphic__tsukune"
          src={tsukune}
        />
      </div>
    </React.Fragment>
  );
};

export default Graphic;
