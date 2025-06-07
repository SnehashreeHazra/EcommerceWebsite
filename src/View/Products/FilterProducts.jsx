import React from "react";

const FilterProducts = () => {
  
  return (
    <div className="filter-products" >

      {/* {isMobile && showSidebar && (
        <div style={{ textAlign: "right" }}>
          <button onClick={onClose} style={{ border: "none", background: "none", fontSize: "20px" }}>
            ✕
          </button>
        </div>
      )} */}
      <h4>Filter Options</h4>

      {/* Saree Category Filter */}
<div className="category">
  <h5>Saree Category</h5>
  <div className="category-div">
    <input type="checkbox" id="banarasi" />
    <label htmlFor="banarasi">Jamdani Suit</label>
  </div>
  <div className="category-div">
    <input type="checkbox" id="kanjeevaram" />
    <label htmlFor="kanjeevaram">Handloom Jamdani</label>
  </div>
  <div className="category-div">
    <input type="checkbox" id="cottonSaree" />
    <label htmlFor="cottonSaree">Kantha Silk</label>
  </div>
  <div className="category-div">
    <input type="checkbox" id="silkSaree" />
    <label htmlFor="silkSaree">Handloom Print</label>
  </div>
  <div className="category-div">
    <input type="checkbox" id="chiffonSaree" />
    <label htmlFor="chiffonSaree">Chiffon Saree</label>
  </div>
  <div className="category-div">
    <input type="checkbox" id="linenSaree" />
    <label htmlFor="linenSaree">Chikankari</label>
  </div>
</div>


      {/* Price Filter */}
      <div className="category">
        <h5>Price Range</h5>
        <input type="range" min="100" max="10000" step="100" />
        <div>₹100 - ₹10,000</div>
      </div>

      {/* Occasion Filter */}
      <div className="category">
        <h5>Occasion</h5>
        <div className="category-div">
          <input type="checkbox" id="wedding" />
          <label htmlFor="wedding">Wedding</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="casual" />
          <label htmlFor="casual">Casual</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="party" />
          <label htmlFor="party">Party</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="festive" />
          <label htmlFor="festive">Festive</label>
        </div>
      </div>

      {/* Color Filter */}
      {/* <div className="category">
        <h5>Color</h5>
        <div className="category-div">
          <input type="checkbox" id="red" />
          <label htmlFor="red">Red</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="blue" />
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="green" />
          <label htmlFor="green">Green</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="yellow" />
          <label htmlFor="yellow">Yellow</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="black" />
          <label htmlFor="black">Black</label>
        </div>
      </div> */}

      {/* Fabric Filter */}
      <div className="category">
        <h5>Fabric</h5>
        <div className="category-div">
          <input type="checkbox" id="cotton" />
          <label htmlFor="cotton">Cotton</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="silk" />
          <label htmlFor="silk">Silk</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="chiffon" />
          <label htmlFor="chiffon">Chiffon</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="georgette" />
          <label htmlFor="georgette">Georgette</label>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="category">
        <h5>Brand</h5>
        <div className="category-div">
          <input type="checkbox" id="brand1" />
          <label htmlFor="brand1">Brand A</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="brand2" />
          <label htmlFor="brand2">Brand B</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="brand3" />
          <label htmlFor="brand3">Brand C</label>
        </div>
      </div>

      {/* Discount Filter */}
      <div className="category">
        <h5>Discount</h5>
        <div className="category-div">
          <input type="checkbox" id="10" />
          <label htmlFor="10">10% or more</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="20" />
          <label htmlFor="20">20% or more</label>
        </div>
        <div className="category-div">
          <input type="checkbox" id="30" />
          <label htmlFor="30">30% or more</label>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
