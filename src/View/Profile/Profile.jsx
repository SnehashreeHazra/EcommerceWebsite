import React from "react";
import "./Profile.css";
import profileImg from "../../assets/Screenshot 2025-05-26 161425.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="universal_container profile-page">
      <div className="profile-header">
        <h3>Sumita Singh</h3>
        <button>Sign Out</button>
      </div>

      <div className="prfile-content">
        <div className="profile-content-left">
          <img src={profileImg} alt="" />
          <h3 className="profile-owner">Sumita Singh</h3>
          <p className="owner-email">sumita.singh@example.com</p>

          <div className="personal-info-div">
            <div className="personal-info-option1 active">
              <i class="fa-regular fa-user"></i>
              <p
                className="personal-info active"
                onClick={() => navigate("/profile")}
              >
                Personal Information
              </p>
            </div>
            <div className="personal-info-option1">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p
                className="personal-info"
                onClick={() => navigate("/my-orders")}
              >
                Order History
              </p>
            </div>
            <div className="personal-info-option1">
              <i class="fa-regular fa-credit-card"></i>
              <p className="personal-info" onClick={() => navigate("/cart")}>
                Cart
              </p>
            </div>
          </div>
        </div>
        <div className="profile-content-right">
          <h2 className="personal-info-heading">Personal Information</h2>
          <p className="personal-info-subheading">
            Manage your personal information, including phone number and email
            address where you can be contacted
          </p>

          <div className="personal-info-wrapper">
            <div className="personal-information-div">
              <div className="personal-info1">
                <p>Name</p> <i className="fa-regular fa-circle-user"></i>
              </div>
              <p className="personal-info2">Sumita Singh</p>
            </div>

            <div className="personal-information-div">
              <div className="personal-info1">
                <p>Email</p> <i className="fa-regular fa-envelope"></i>
              </div>
              <p className="personal-info2">sumita.singh@example.com</p>
            </div>

            <div className="personal-information-div">
              <div className="personal-info1">
                <p>Phone Number</p> <i className="fa-solid fa-phone"></i>
              </div>
              <p className="personal-info2">+91 9876543210</p>
            </div>

            <div className="personal-information-div">
              <div className="personal-info1">
                <p>Shipping Address</p>{" "}
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p className="personal-info2">
                123, MG Road, Delhi, India - 110001
              </p>
            </div>

            {/* <div className="personal-information-div">
              <div className="personal-info1">
                <p>Payment Method</p>{" "}
                <i className="fa-regular fa-credit-card"></i>
              </div>
              <p className="personal-info2">Visa **** 1234</p>
            </div> */}

            {/* <div className="personal-information-div">
              <div className="personal-info1">
                <p>Gender</p> <i className="fa-solid fa-venus-mars"></i>
              </div>
              <p className="personal-info2">Female</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
