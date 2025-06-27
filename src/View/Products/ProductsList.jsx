import React, { useEffect, useState } from "react";
import productImg1 from "../../assets/DSC06419.webp";
import productImg2 from "../../assets/211.webp";
import productImg3 from "../../assets/my-secretly-passed-notes-in-class-630375_700x700.webp";
import productImg4 from "../../assets/gcmomocosa21-_282_29.webp";
import { useNavigate } from "react-router-dom";
import prodImg from "../../assets/jheel-837723.webp";
import prodImg1 from "../../assets/beet-and-turnip-456373.webp";
import FilterProducts from "./FilterProducts";

const ProductsList = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [
    {
      img: productImg1,
      img1: prodImg1,
      category: "Sarees",
      rating: 4.9,
      name: "Elegant Silk Sarees",
      price: 165.0,
      oldPrice: 220.0,
    },
    {
      img: productImg3,
      img1: prodImg1,
      category: "Sarees",
      rating: 4.9,
      name: "Banarasi Zari Sarees",
      price: 185.0,
      oldPrice: 250.0,
    },
    {
      img: productImg1,
      img1: prodImg1,
      category: "Saree",
      rating: 4.9,
      name: "Chiffon Party Sarees",
      price: 135.0,
      oldPrice: 180.0,
    },
    {
      img: productImg1,
      img1: prodImg1,
      category: "Saree",
      rating: 4.9,
      name: "Kanchipuram Silk Sarees",
      price: 195.0,
      oldPrice: 260.0,
    },
    {
      img: productImg1,
      img1: prodImg1,
      category: "Saree",
      rating: 4.9,
      name: "Kanchipuram Silk Saree",
      price: 195.2,
      oldPrice: 260.0,
    },
    {
      img: productImg2,
      img1: prodImg1,
      category: "Saree",
      rating: 4.8,
      name: "Banarasi Zari Saree",
      price: 185.0,
      oldPrice: 250.0,
    },
    {
      img: productImg4,
      img1: prodImg1,
      category: "Saree",
      rating: 4.9,
      name: "Banarasi Zari Saree",
      price: 185.0,
      oldPrice: 250.0,
    },
    {
      img: productImg1,
      img1: prodImg1,
      category: "Sarees",
      rating: 4.9,
      name: "Banarasi Zari Saree",
      price: 185.0,
      oldPrice: 250.0,
    },
  ];

  return (
    <div className="product-list">
      <i
        class="fa-solid fa-arrow-up-short-wide"
        style={{ display: "none" }}
      ></i>

      <div className="product-list-header">
        <p className="results">Showing 1-4 of results</p>
        <div
          className="sortby-container"
          onClick={() => setIsToggle(!isToggle)}
        >
          <div className="newest-div">
            <span>Sort By</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          {isToggle && (
            <ul className="sortby-menu" id="sortby">
              <li>Newest Arrivals</li>
              <li>Price: Low to High</li>
              <li>Price: High to Low</li>
              <li>Best Sellers</li>
              <li>Discount</li>
            </ul>
          )}
        </div>
      </div>
      {/* <div className="product-list-header2">
        <div className="active-filters">
          <p>Active Filter</p>
          <div className="filters-div">
            <div className="filter">
              <span>Sarees</span> <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="filter">
              <span>Medium</span> <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="filter">
              <span>Red</span> <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="filter">
              <span>Cotton</span> <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
        <p className="clean-all">Clean All</p>
      </div> */}

      <div className="products-list00">
        {products.map((product, index) => (
          <div className="product45" key={index}>
            {/* 15% OFF Badge */}
            <div className="off-badge">15% OFF</div>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="prod-img00"
            >
              <img
                src={hoveredIndex === index ? product.img1 : product.img}
                alt={product.name}
              />
            </div>
            <div className="product-rating">
              <p>{product.category}</p>
              <p className="rating">
                <i className="fa-solid fa-star"></i>
                <span>{product.rating}</span>
              </p>
            </div>
            <p
              style={{ marginBottom: "5px", color: "#000", fontWeight: "600" }}
            >
              {product.name}
            </p>
            {/* Price and View More Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="prod-price45" style={{ margin: 0 }}>
                ₹{product.price.toFixed(2)}{" "}
                <span style={{ textDecoration: "line-through", color: "#888" }}>
                  ₹{product.oldPrice.toFixed(2)}
                </span>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#000",
                  cursor: "pointer",
                  margin: 0,
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/single-product")}
              >
                View More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
