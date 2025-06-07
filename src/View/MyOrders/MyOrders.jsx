import React from "react";
import "./MyOrders.css";
import orderItem1 from "../../assets/my-secretly-passed-notes-in-class-630375_700x700.webp";
import orderItem2 from "../../assets/PracheeShahPaandya.webp";
import orderItem3 from "../../assets/gcmomocosa21-_282_29.webp";

const MyOrders = () => {
  return (
    <div className="universal_container">
      <h2 className="shopping-bag-heading">My Orders</h2>

      <div className="orders-list">
        <div className="order">
          <div className="order-content1">
            <div className="order-cond">Delivered</div>
            <p className="rate-order">
              {" "}
              <i class="fa-solid fa-star"></i> Rate & Review Product
            </p>
          </div>
          <div className="order-content2">
            <div className="order-purchasing-time">
              <p className="order-time">04/02/2025 10:50 am</p>
              <p className="order-number">Order No: 5220712134013222</p>
            </div>
            <p className="order-price">
              Total: <span>₹400.00</span>
            </p>
          </div>

          <div className="order-content3">
            <div className="order-content3-one">
              <img src={orderItem1} alt="" />
              <div className="order-info">
                <p className="order-name">Floral Print Wrap Dress</p>
                <p className="order-desc">
                  Soft cotton t-shirt with a relaxed fit
                </p>
              </div>
            </div>
            <div className="mini-info">
              <p>
                <i className="fa-solid fa-box"></i> Quantity: 2
              </p>
              <p>
                <i className="fa-solid fa-wallet"></i> Paid via: UPI
              </p>
            </div>
          </div>
        </div>

        <div className="order">
          <div className="order-content1">
            <div className="order-cond-shipped">Shipped</div>
            <p className="rate-order">
              {" "}
              <i class="fa-solid fa-star"></i> Rate & Review Product
            </p>
          </div>
          <div className="order-content2">
            <div className="order-purchasing-time">
              <p className="order-time">04/02/2025 10:50 am</p>
              <p className="order-number">Order No: 5220712134013222</p>
            </div>
            <p className="order-price">
              Total: <span>₹400.00</span>
            </p>
          </div>

          <div className="order-content3">
            <div className="order-content3-one">
              <img src={orderItem2} alt="" />
              <div className="order-info">
                <p className="order-name">Floral Print Wrap Dress</p>
                <p className="order-desc">
                  Soft cotton t-shirt with a relaxed fit
                </p>
              </div>
            </div>
            <div className="mini-info">
              <p>
                <i className="fa-solid fa-box"></i> Quantity: 2
              </p>
              <p>
                <i className="fa-solid fa-wallet"></i> Paid via: UPI
              </p>
            </div>
          </div>
        </div>

        <div className="order">
          <div className="order-content1">
            <div className="order-cond-cancel">Canceled</div>
            <p className="rate-order">
              {" "}
              <i class="fa-solid fa-star"></i> Rate & Review Product
            </p>
          </div>
          <div className="order-content2">
            <div className="order-purchasing-time">
              <p className="order-time">04/02/2025 10:50 am</p>
              <p className="order-number">Order No: 5220712134013222</p>
            </div>
            <p className="order-price">
              Total: <span>₹400.00</span>
            </p>
          </div>

          <div className="order-content3">
            <div className="order-content3-one">
              <img src={orderItem3} alt="" />
              <div className="order-info">
                <p className="order-name">Floral Print Wrap Dress</p>
                <p className="order-desc">
                  Soft cotton t-shirt with a relaxed fit
                </p>
              </div>
            </div>
            <div className="mini-info">
              <p>
                <i className="fa-solid fa-box"></i> Quantity: 2
              </p>
              <p>
                <i className="fa-solid fa-wallet"></i> Paid via: UPI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
