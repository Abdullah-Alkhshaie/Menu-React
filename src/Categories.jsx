import React from "react";
import { useState } from "react";

const Categories = ({ categories, filterItem }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
      {/* {categories.map((btn, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItem(btn)}
          >
            {btn}
          </button>
        );
      })} */}
    </div>
  );
};

export default Categories;
