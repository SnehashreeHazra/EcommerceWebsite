import React from "react";
import "./Products.css";
import FilterProducts from "./FilterProducts";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <div className="universal_container all-products-page">
      <FilterProducts />
      <ProductsList />
    </div>
  );
};

export default Products;
