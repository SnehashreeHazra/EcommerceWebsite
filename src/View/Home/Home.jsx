import React, { useEffect, useRef } from "react";
import HomeBanner from "./HomeBanner";
import "./Home.css";
import HomeCategories from "./HomeCategories";
import InSpotlight from "./InSpotlight";
import HomeParallax from "./HomeParallax";
import Quality from "./Quality";
import Testimonial from "./Testimonial";
import Footer from "../../Layout/Footer";
import NewArrivals from "./NewArrivals.jsx";
import { useLocation } from "react-router-dom";
const Home = () => {
   const newArrivalsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#new-arrivals" && newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <HomeBanner />
      <HomeCategories />
      <NewArrivals ref={newArrivalsRef} />
      <InSpotlight />
      <HomeParallax />
      <Quality />
      <Testimonial />
    </>
  );
};

export default Home;
