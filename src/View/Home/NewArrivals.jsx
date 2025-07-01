import React, { forwardRef } from "react";
import "./Home.css";
import ArrivalProduct from "./ArrivalProduct";

const NewArrivals = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="spotlight_wrapper home_categories_wrapper universal_container">
        <div className="home_categories_head">
          <h1>NEW ARRIVALS</h1>
          <span className="line_through"></span>
        </div>
        <div className="spotlight_products_wrapper">
          <ArrivalProduct />
        </div>
      </div>
    </div>
  );
});

export default NewArrivals;
