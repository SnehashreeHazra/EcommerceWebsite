import React, { useState } from "react";
import img from "../../assets/blue-paithni-traditional-saree-with-weaving-work-for-women-298407.webp";
import img2 from "../../assets/vfv0y_512.webp";
import img3 from "../../assets/OSBTCMS27-3-1.webp";
import img4 from "../../assets/okhai4529.webp";
import img5 from "../../assets/PureSilkBlueBaluchariSareewithMythologicalFiguresandButiWork_5.webp";
import { useNavigate } from "react-router-dom";

const ArrivalProduct = () => {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState();
  const navigate = useNavigate();
  return (
    <>
      {[
        {
          img1: img,
          img2: img2,
        },
        {
          img1: img3,
          img2: img2,
        },
        {
          img1: img4,
          img2: img2,
        },
        {
          img1: img5,
          img2: img2,
        },
      ].map((e, i) => {
        return (
          <>
            <div
              onClick={() => navigate(`/single-product/${i}`, {state: {img1: e.img1, img2: e.img2, }})}
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
    </>
  );
};

export default ArrivalProduct;
