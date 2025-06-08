import React, { useState } from "react";
import img from "../assets/download.png";
const Sidebar = ({ setSidebarOpen, sidebarIsOpen }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="sidebar_wrapper">
        <div className="sidebar_header">
          <i
            class="fa-solid fa-xmark"
            onClick={() => setSidebarOpen(false)}
          ></i>
        </div>
        <div className="sidebar_link_div">
          <div
            onClick={() => {
              setDropdown(!dropdown);
            }}
            className="sidebar_link"
          >
            Women
            <i class="fa-solid fa-caret-down"></i>
          </div>
          {dropdown && (
            <div className="sidebar_dropdown">
              <p>
                Saree <i class="fa-solid fa-caret-down"></i>
              </p>
              <p>Kurti</p>
              <p>Lorem</p>
              <p>Ipsum</p>
            </div>
          )}
          <div className="sidebar_link">Sale</div>
          <div className="sidebar_link">Products</div>
          <div className="sidebar_link">Best Sellers</div>
          <div className="sidebar_link">New Arrivals</div>
          <div className="sidebar_link">Collections</div>
          <div className="sidebar_link">About Us</div>
          <div className="sidebar_link">Contact</div>
        </div>

        <div className="sidebar_account_details_div">
          <div className="sidebar_img_div">
            <img src={img} />
          </div>
          <div className="sidebar_text_div">
            <h6>John Doe</h6>
            <p>loremipsum2023@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
