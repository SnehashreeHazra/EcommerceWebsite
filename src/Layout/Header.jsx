import React, { useState } from "react";
import logo from "../assets/ChatGPT_Image_Jun_3__2025__09_04_10_PM-removebg-preview.png";
import { NavLink, useNavigate } from "react-router-dom";
import right from "../assets/right-arrow.png";
import Sidebar from "./Sidebar";
const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState({
    women: false,
    saree: false,
  });
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {sidebarIsOpen && (
        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <marquee speed="0.3" className="header_top">
        {" "}
        Use Code: FIRSTBUY5 – Get 5% OFF on your first purchase | Enjoy FREE
        Shipping across India. Shop now and save big! | Enjoy FREE Shipping
        across India. Shop now and save big! | Enjoy FREE Shipping across India.
        Shop now and save big! | Enjoy FREE Shipping across India. Shop now and
        save big! | Enjoy FREE Shipping across India. Shop now and save big!
      </marquee>
      {/* Navbar Starts From Here */}

      <nav className="nav_wrapper_main">
        <div className="nav_cover_div">
          <i
            onClick={() => setSidebarOpen(!sidebarIsOpen)}
            class="fa-solid fa-bars-staggered"
          ></i>
          <div className="nav_logo_div" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className="nav_link_div">
            <div className="nav_dropown_wrapper ">
              {/* <NavLink>Women</NavLink> */}
              <div className="dropdown_div_nav women_dropdown">
                <div
                  className="dropdown_item"
                  onMouseEnter={() => setToggle({ saree: true })}
                >
                  Saree <img src={right} />
                </div>
                <div className="dropdown_item">Kurti</div>
                <div className="dropdown_item">Blouse</div>
                <div className="dropdown_item">Lorem</div>
                <div className="dropdown_item">Ipsum</div>
                <div className="dropdown_item">Random</div>
                <div className="dropdown_item">Lorem</div>
                <div className="dropdown_item">Ipsum</div>
                <div className="dropdown_item">Random</div>
              </div>
              {toggle.saree && (
                <div
                  className="nested_drowdown_div"
                  onMouseLeave={() => setToggle({ saree: false })}
                >
                  <div className="dropdown_item">Kantha Saree</div>
                  <div className="dropdown_item">Handloom Cotton Saree</div>
                  <div className="dropdown_item">Jamdani Saree</div>
                  <div className="dropdown_item">Kantha Silk Saree</div>
                </div>
              )}
            </div>
            <NavLink>SALE</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink>BestSellers</NavLink>
            <NavLink>NEW ARRIVALS</NavLink>
            <NavLink>COLLECTIONS</NavLink>
            <NavLink to="/about-us">ABOUT US</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
          <div className="nav_cart_login_div">
            <i
              onClick={() => navigate("/register")}
              class="fa-regular fa-user"
            ></i>
            <i
              onClick={() => setSearch(!search)}
              class="fa-solid fa-magnifying-glass"
            ></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
        <div className={search ? "nav_search_wrapper2" : "nav_search_wrapper"}>
          <div className="search_input_div">
            <input type="text" placeholder="Search...." />
            <i
              onClick={() => setSearch(!search)}
              class="fa-solid fa-magnifying-glass"
            ></i>
            <i
              onClick={() => setSearch(!search)}
              class="fa-solid fa-x"
              style={{
                position: "absolute",
                top: "15px",
                right: "0px",
                fontSize: "20px",
                color: "#8a847b",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
