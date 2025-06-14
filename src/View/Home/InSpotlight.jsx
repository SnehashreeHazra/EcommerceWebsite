import React from "react";
import "./Home.css";
import SpotlightCard from "./SpotlightCard";
import { useNavigate } from "react-router-dom";
const InSpotlight = ({ realatedProducts }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="spotlight_wrapper home_categories_wrapper universal_container">
        <div className="home_categories_head">
          <h1>FEATURED PRODUCTS</h1>
          <span className="line_through"></span>
        </div>
        <div className="spotlight_products_wrapper">
          <SpotlightCard realatedProducts={true} />
        </div>
        {!realatedProducts && (
          <div
            className="view_all_button"
            onClick={() => navigate("/products")}
          >
            View All
          </div>
        )}
      </div>
    </>
  );
};

export default InSpotlight;
