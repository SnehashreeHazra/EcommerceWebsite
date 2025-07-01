import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SingleProductDescription from "./SingleProductDescription";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [count, setCount] = useState(0);

  // Grab data from state or fallback to localStorage
  const storedProduct = localStorage.getItem("selectedProduct");
  const fallbackData = storedProduct ? JSON.parse(storedProduct) : null;

  const product = {
    img1: state?.img1 || fallbackData?.img1,
    img2: state?.img2 || fallbackData?.img2,
  };

  // Save to localStorage on load if from state
  useEffect(() => {
    if (state?.img1 && state?.img2) {
      localStorage.setItem("selectedProduct", JSON.stringify(state));
    }
  }, [state]);

  const [imgUrl, setimgUrl] = useState(product.img1 || "");

  const smallImages = [product.img1, product.img2, product.img1, product.img2];

  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  const mouseEnterZoom = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    setPosition({ x, y, scale: 2 });
  };

  const mouseLeaveZoom = () => {
    setPosition({ x: 0, y: 0, scale: 1 });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  // If product doesn't exist
  if (!product.img1 || !product.img2) {
    return (
      <div className="universal_container" style={{ padding: "100px 0" }}>
        <h2>Product not found. Please go back to the homepage.</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <>
      <div className="single_product_wrapper universal_container">
        <div className="single_product_left">
          <div
            onMouseMove={mouseEnterZoom}
            onMouseLeave={mouseLeaveZoom}
            className="single_product_img_div"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transformOrigin: `${position.x}px ${position.y}px`,
                transform: `scale(${position.scale})`,
              }}
              src={imgUrl}
              alt="Zoomed Product"
            />
          </div>
          <div className="single_product_small_images_wrapper">
            {smallImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setimgUrl(img)}
                className="single_product_small_img"
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="single_product_right">
          <p className="saree_para">Saree</p>
          <h1 className="product_name85685">Brown Saree</h1>
          <div className="single_product_rating_wrapper">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
            <div className="single_product_rates">4.8 (245) Reviews</div>
          </div>
          <div className="single_product_price_div">
            <p className="current_price">₹1,500.00</p>
            <p className="discounted_price">₹3,500.00</p>
            <small
              style={{ color: "green", fontWeight: 600, fontSize: "15px" }}
            >
              70% Off
            </small>
          </div>

          <p className="instock_para">In Stock</p>
          <p className="lorem_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="pinCode_wrapper">
            <input placeholder="Enter delivery pincode" />
            <p>Check</p>
          </div>

          <p className="delivery_para">
            Delivery by 15 May, Thursday | <span>Free</span> ₹40
          </p>
          <p className="order_para">if ordered before 1:59 PM</p>

          <div className="quantiy_add_to_cart_wrapper">
            <div className="plus_minus_wrapper">
              <div className="count_plus" onClick={() => setCount(count + 1)}>
                {" "}
                +{" "}
              </div>
              <div className="count_div">{count}</div>
              <div
                className="count_minus"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
              >
                -
              </div>
            </div>
            <button className="buy_now_btn" onClick={() => navigate("/cart")}>
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
  );
};

export default SingleProduct;
