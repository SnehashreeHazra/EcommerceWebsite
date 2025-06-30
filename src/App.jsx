import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./MainLayout/MainLayout";
import Home from "./View/Home/Home";
import SingleProduct from "./View/SingleProduct/SingleProduct";
import Cart from "./View/Cart/Cart";
import Products from "./View/Products/Products";
import Register from "./View/Authentication/Register/Register";
import Login from "./View/Authentication/Login/Login";
import ForgotPassword from "./View/Authentication/ForgotPassword/ForgotPassword";
import OtpVerify from "./View/Authentication/ForgotPassword/OtpVerify";
import NewPassword from "./View/Authentication/ForgotPassword/NewPassword";
import MyOrders from "./View/MyOrders/MyOrders";
import Profile from "./View/Profile/Profile";
import Contact from "./View/Contact/Contact";
import AboutUs from "./View/AboutUs/AboutUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verify" element={<OtpVerify />} />
            <Route path="/confirm-password" element={<NewPassword />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
