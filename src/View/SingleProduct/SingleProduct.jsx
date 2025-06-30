import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import img from "../../assets/PracheeShahPaandya.webp";
import img2 from "../../assets/DSC05600.avif";
import img3 from "../../assets/beet-and-turnip-456373.webp";
import SpotlightCard from "../Home/SpotlightCard";
import InSpotlight from "../Home/InSpotlight";
import SingleProductDescription from "./SingleProductDescription";
import RelatedProducts from "./RelatedProducts";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  useEffect(() => {
    console.log("Dynamic Product ID:", id); // You can now fetch data using this id
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [imgUrl, setimgUrl] = useState(state?.img1 || img);
  const smallImages = [state?.img1, state?.img2, state?.img1, state?.img2];

  const [position, setposition] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });
  const mouseEnterZoom = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    setposition({
      x: x,
      y: y,
      scale: 2,
    });
  };
  const mouseLeaveZoom = () => {
    setposition({
      x: 0,
      y: 0,
      scale: 1,
    });
  };

  return (
    <>
      {!state?.img1 ? (
        <div className="universal_container" style={{ padding: "100px 0" }}>
          <h2>Product not found. Please go back to the homepage.</h2>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      ) : (
        <>
          <div className="single_product_wrapper universal_container">
            <div className="single_product_left">
              <div
                onMouseMove={(e) => mouseEnterZoom(e)}
                onMouseLeave={() => mouseLeaveZoom()}
                className="single_product_img_div"
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transformOrigin: `${position.x}px ${position.y}px`,
                    transform: `scale(${position.scale})`,
                    overflow: "hidden",
                  }}
                  src={imgUrl}
                />
              </div>
              <div className="single_product_small_images_wrapper">
                {smallImages.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => setimgUrl(e)}
                    className="single_product_small_img"
                  >
                    <img src={e} />
                  </div>
                ))}
              </div>
            </div>
            <div className="single_product_right">
              <p className="saree_para">Saree</p>
              <h1 className="product_name85685">Brown Saree</h1>
              <div className="single_product_rating_wrapper">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <div className="single_product_rates">4.8 (245) Reviews</div>
              </div>
              <div className="single_product_price_div">
                <p className="current_price">₹1,500.00</p>
                <p className="discounted_price">₹3,500.00 </p>
                <small
                  style={{
                    color: "green",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  70% Off
                </small>
              </div>
              <p className="instock_para">In Stock</p>
              <div
                className="lorem_text_div"
                style={{
                  width: "81%",
                }}
              >
                <p className="lorem_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              {/* <div className='single_product_color_wrapper'>
            <p className='color_para'>Color: <span>Brown</span></p>
            <div className='color_box_wrapper'>
            {['brown','#453c35','#baae8a','lightgreen'].map((e,i)=>{
                return(
                    <>
                    <div style={{
                        border:`1px solid ${e}`
                    }} className='color_outside_div'>
                    <div style={{
                        background:e
                    }} className='color_inside_div'></div>
                </div>
                    </>
                )
            })}
              
            </div>
           </div> */}

              <div className="pinCode_wrapper">
                <input placeholder="Enter delivery pincode " />
                <p>Check</p>
              </div>

              <div>
                <p className="delivery_para">
                  Delivery by 15 May, Thursday | <span>Free</span> ₹40
                </p>
                <p className="order_para">if ordered before 1:59 PM</p>
              </div>

              {/* <div className='single_product_size_wrapper'>
           <p className='color_para'>Size: <span>2XL</span></p>
           <div className='single_product_all_size_wrapper'>
            <div className='single_product_size'>S</div>
            <div className='single_product_size'>M</div>
            <div className='single_product_size'>L</div>
            <div className='single_product_size'>XL</div>
            <div className='single_product_size_active'>2XL</div>
            <div className='single_product_size'>3XL</div>
            <div className='single_product_size'>4XL</div>
           </div>
           </div> */}
              {/* <p className='size_guide_para'>View Size Guide </p> */}
              <div className="quantiy_add_to_cart_wrapper">
                <div className="plus_minus_wrapper">
                  <div
                    className="count_plus"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    {" "}
                    +{" "}
                  </div>
                  <div className="count_div">{count}</div>
                  <div
                    className="count_minus"
                    onClick={() => {
                      if (count <= 0) {
                        setCount(0);
                      } else {
                        setCount(count - 1);
                      }
                    }}
                  >
                    {" "}
                    -{" "}
                  </div>
                </div>
                <button
                  className="buy_now_btn"
                  onClick={() => navigate("/cart")}
                >
                  Buy Now
                </button>
                <button
                  className="add_to_cart_btn"
                  onClick={() => navigate("/cart")}
                >
                  Add To Cart
                </button>
              </div>

              <div className="category_tags_SKU_wrapper">
                <p className="tags_para">
                  SKU:<span>GHFT8A8D6952</span>
                </p>
                <p className="tags_para">
                  Tags:<span>Women, Saree, Fashion, Modern</span>
                </p>
              </div>
            </div>
          </div>
          <SingleProductDescription />
          <RelatedProducts />
        </>
      )}
    </>
  );
};

export default SingleProduct;
