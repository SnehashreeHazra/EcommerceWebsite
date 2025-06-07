import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="universal_container">
      
      <div className="contact_us_content">
        <div className="contact_us_left">
        <h2 className="contact_us_heading">Contact Us</h2>
          <div className="headquater_div">
            <div className="headquater_heading">
              <p>Headquater</p>
            </div>
            <div className="headquater_content">
              <p>4th floor | Asopalav House</p>
              <p>Opp, ITC Narmada Hotel</p>
              <p>Ahmedabad, India</p>
              <p>380015</p>
            </div>
            <p className="working_hr">Working hours: Monday - Friday: 10:30 AM to 7 PM, IST</p>
          </div>
          <div className="contact_info_order">
            <div className="contact_info_div">
              <div className="contact_info_heading">
                <p>Contact Info</p>
              </div>
              <p style={{marginBottom:'5px'}}>example@gmail.com</p>
              <p style={{marginBottom:'5px'}}>+123456789</p>
              <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div className="order_info_div">
              <div className="order_info_heading">
                <p>Order Information</p>
              </div>
              <p>Track Order</p>
              <p>Order Details</p>
              <p>Shipping Policy</p>
            </div>
          </div>
        </div>
        <div className="contact_us_right">
          <h4>Write Us</h4>
          <form className="contact_form">
            <div className="form-group">
              <p>Name <span>*</span></p>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <p>Email <span>*</span></p>
              <input type="text" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <p>Phone Number</p>
              <input type="text" className="form-control" placeholder="+91 123456789" />
            </div>
            <div className="form-group">
              <p>What's on your mind? <span>*</span></p>
              <textarea className="form-control" placeholder="Write your message here..." required></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
