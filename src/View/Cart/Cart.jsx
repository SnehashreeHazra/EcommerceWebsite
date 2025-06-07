import React from "react";
import "./Cart.css";
import cartProduct1Img from "../../assets/Kesariya_5_700x700.webp";
import cartProduct2Img from "../../assets/15_eb25a63f-696b-4f4b-abd8-45f975244e7f.webp";

const Cart = () => {
  const products = [
    {
      id: 1,
      image: cartProduct1Img,
      category: "WOMEN",
      name: "Floral Print Wrap Dress",
      description: "Soft cotton t-shirt with a relaxed fit",
      size: "Large",
      price: "₹400.00",
      quantity: 1,
    },
    {
      id: 2,
      image: cartProduct2Img,
      category: "WOMEN",
      name: "Floral Print Wrap Dress",
      description: "Soft cotton t-shirt with a relaxed fit",
      size: "Large",
      price: "₹400.00",
      quantity: 1,
    },
  ];
  return (
    <div className="universal_container cart-page">
      <h2 className="shopping-bag-heading">Shopping Bag</h2>
      <p className="cart-subheading">
        <span>2 Items</span> in your bag.
      </p>
      <div className="cart-container">
        <div className="cart-products">
          <div className="cart-products-header">
            <p>Product</p>
          </div>
          {products.map((product, index) => (
            <div className="product01" key={product.id}>
              <div className="product01-content1">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <p className="prod-category">{product.category}</p>
                  <p className="prod-name">{product.name}</p>
                  <p className="prod-color">
                    <span>{product.isColor ? "Color" : "Description"}</span> •{" "}
                    {product.description}
                  </p>
                  <p className="prod-size">
                    <span>Size</span> • {product.size}
                  </p>
                  <p className="prod-price">{product.price}</p>
                </div>
              </div>
              <div className="product01-content2">
                <i
                  style={{ color: "red", cursor: "pointer" }}
                  className="fa-solid fa-trash-can"
                ></i>
                <div className="quantity-buttons">
                  <button>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span
                    style={{
                      padding: "0px 5px",
                      fontWeight: "500",
                      color: "#000",
                    }}
                  >
                    {product.quantity}
                  </span>
                  <button>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-right">
          <h4 className="order-summary">Order Summary</h4>
          <div className="order-details">
            <p style={{ color: "#585454" }}>Subtotal</p>
            <p style={{ color: "#000", fontWeight: "600" }}>₹1150.00</p>
          </div>
          <div className="order-details">
            <p style={{ color: "#585454" }}>Discount (-20%)</p>
            <p style={{ color: "red", fontWeight: "600" }}>-₹230.00</p>
          </div>
          <div className="order-details">
            <p style={{ color: "#585454" }}>Delivery Fee</p>
            <p style={{ color: "#000", fontWeight: "600" }}>₹70.00</p>
          </div>
          <div className="order-details1">
            <p style={{ color: "#000", fontWeight: "600" }}>Total</p>
            <p style={{ fontSize: "17px", color: "#000", fontWeight: "600" }}>
              ₹990.00
            </p>
          </div>
          <div className="promo-code">
            <div className="promo-code1">
              <i class="fa-solid fa-tag"></i>{" "}
              <input type="text" placeholder="Add Promo Code" />
            </div>
            <button>Apply</button>
          </div>
          <button className="checkout-btn">
            Go to Checkout <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
