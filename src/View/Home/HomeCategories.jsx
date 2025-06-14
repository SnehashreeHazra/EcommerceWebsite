import React from "react";
import CategoriesCard from "./CategoriesCard";

const HomeCategories = () => {
  return (
    <>
      <div className="home_categories_wrapper universal_container">
        <div className="home_categories_head">
          <h1>TOP CATEGORIES</h1>
          <span className="line_through"></span>
        </div>

        <div className="categories_card_wrapper">
          <CategoriesCard />
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
