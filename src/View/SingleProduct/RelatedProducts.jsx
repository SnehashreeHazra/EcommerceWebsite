import React, { useState } from "react";
import img from "../../assets/DSC06425_3edee550-1d5e-47f0-b661-ef82396ba44e.webp";
import img2 from "../../assets/jheel-837723.webp";
import { useNavigate } from "react-router-dom";
const RelatedProducts = () => {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState();
  const navigate = useNavigate();
  return (
    <>
      <div className="spotlight_wrapper home_categories_wrapper universal_container">
        <div className="home_categories_head">
          <h1>RELATED PRODUCTS</h1>
          <span className="line_through"></span>
        </div>
        <div className="spotlight_products_wrapper">
          {[
            { img1: img, img2: img2 },
            { img1: img, img2: img2 },
            { img1: img, img2: img2 },
            { img1: img, img2: img2 },
          ].map((e, i) => {
            return (
              <>
                <div
                  onClick={() => {
                    navigate("/single-product");
                  }}
                  className="spotlight_card"
                >
                  <div
                    onMouseLeave={() => {
                      setHover(false);
                      setIndex(i);
                    }}
                    onMouseEnter={() => {
                      setIndex(i);
                      setHover(true);
                    }}
                    className="spotlight_img_div"
                  >
                    <img src={index === i && hover ? e.img2 : e.img1} />
                  </div>
                  <div className="spotlight_product_details">
                    <h5>Blue Saree</h5>
                    <h6>Saree</h6>
                    <p>₹ 3,000.00</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
