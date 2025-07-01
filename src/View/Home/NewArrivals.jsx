import React from "react";
import "./Home.css";
import SpotlightCard from "./SpotlightCard";
import ArrivalProduct from "./ArrivalProduct";
const NewArrivals = () => {
  return (
    <div id="new-arrivals">
      <div className="spotlight_wrapper home_categories_wrapper universal_container">
        <div className="home_categories_head">
          <h1>NEW ARRIVALS</h1>
          <span className="line_through"></span>
        </div>
        <div className="spotlight_products_wrapper">
          <ArrivalProduct />
        </div>
        {/* {! realatedProducts && <div className='view_all_button'>View All</div>} */}
      </div>
    </div>
  );
};

export default NewArrivals;
