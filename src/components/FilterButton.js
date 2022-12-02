import React from "react";
import Data from "./assets/product-data.json";
 
const Buttons = ({setCartItems, brandItems, filterItem}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {brandItems.map((item, name) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(item)}
              key={name}
            >
              {item}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setCartItems(Data)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;
