import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="universal_container about_us_container">
        <h2 className="about_us_heading">ABOUT US</h2>
        <p className="about_us_subheading">A saree speaks without words — what does yours say?</p>
        <p className="about_us_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro rerum,
          expedita iusto explicabo exercitationem soluta, vel pariatur beatae
          tempora quae neque placeat impedit tempore deserunt cum. Deserunt
          totam hic mollitia?
        </p>

        <p className="about_us_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro rerum,
          expedita iusto explicabo exercitationem soluta, vel pariatur beatae
          tempora quae neque placeat impedit tempore deserunt cum. Deserunt
          totam hic mollitia?
        </p>

        <p className="about_us_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro rerum,
          expedita iusto explicabo exercitationem soluta, vel pariatur beatae
          tempora quae neque placeat impedit tempore deserunt cum. Deserunt
          totam hic mollitia?
        </p>

        <p className="about_us_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          sunt. Commodi a, praesentium pariatur ducimus omnis totam iste at
          exercitationem!
        </p>
      </div>
      <div className="shipping_div">
        <div className="universal_container shipping_container">
          <div className="shipping_div1">
            <i class="fa-solid fa-box-archive"></i> <p>Free Shipping</p>
          </div>
          <div className="shipping_div1">
            <i class="fa-solid fa-user-tag"></i> <p>We are available 24/7</p>
          </div>
          <div className="shipping_div1">
            <i class="fa-solid fa-shield-halved"></i>
            <p>100% Secure payments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
