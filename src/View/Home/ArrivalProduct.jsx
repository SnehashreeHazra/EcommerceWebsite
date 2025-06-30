import React, { useState } from "react";
import img from "../../assets/blue-paithni-traditional-saree-with-weaving-work-for-women-298407.webp";
import img2 from "../../assets/vfv0y_512.webp";
import img3 from "../../assets/OSBTCMS27-3-1.webp";
import img4 from "../../assets/okhai4529.webp";
import img5 from "../../assets/PureSilkBlueBaluchariSareewithMythologicalFiguresandButiWork_5.webp";
import { useNavigate } from "react-router-dom";

const ArrivalProduct = () => {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(null);
  const navigate = useNavigate();

  const products = [
    { img1: img, img2: img2 },
    { img1: img3, img2: img2 },
    { img1: img4, img2: img2 },
    { img1: img5, img2: img2 },
  ];

  return (
    <>
      {products.map((e, i) => (
        <div
          key={i}
          onClick={() => {
            const data = { img1: e.img1, img2: e.img2 };
            localStorage.setItem("selectedProduct", JSON.stringify(data));
            navigate(`/single-product/${i}`, { state: data });
          }}
          className="spotlight_card"
        >
          <div
            onMouseEnter={() => {
              setHover(true);
              setIndex(i);
            }}
            onMouseLeave={() => {
              setHover(false);
              setIndex(null);
            }}
            className="spotlight_img_div"
          >
            <img
              src={index === i && hover ? e.img2 : e.img1}
              alt={`saree-${i}`}
            />
          </div>
          <div className="spotlight_product_details">
            <h5>Blue Saree</h5>
            <h6>Saree</h6>
            <p>₹ 3,000.00</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArrivalProduct;
