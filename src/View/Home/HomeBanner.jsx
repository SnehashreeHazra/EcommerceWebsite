import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/259c5fac-0bf8-4687-8b45-1c124d1153b5.webp";
import img2 from "../../assets/shared102_1800x.webp";
import img3 from "../../assets/5_desktop_1800x.webp";
import { Carousel } from "react-responsive-carousel";

import img from "../../assets/259c5fac-0bf8-4687-8b45-1c124d1153b5.webp";
const HomeBanner = () => {
  const banners = [{ image: img1 }, { image: img2 }, { image: img3 }];
  return (
    <>
      <div className="home_banner">
        <div className="overlay"></div>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          showArrows={false}
          stopOnHover={false}
        >
          {banners.map((e, i) => (
            <div key={i}>
              <img
                src={e.image}
                alt={`banner-${i}`}
                style={{
                  height: "80vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </Carousel>
        {/* <div className="universal_container">
          <div className="home_banner_content">
            <h1>
              Summer <br /> Sale Is Live
            </h1>
            <h2>Get Upto 50% Off </h2>
            <div className="banner_button_wrapper">
              <button>Shop Now</button>
              <button>Know More</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeBanner;
