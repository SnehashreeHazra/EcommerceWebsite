import React from 'react'
import product from "../../assets/beet-and-turnip-456373.webp";
import product1 from "../../assets/DSC05600.avif";
import product2 from "../../assets/Kesariya_5_700x700.webp";
import product3 from "../../assets/PracheeShahPaandya.webp";
import Review from './Review.jsx'
const SingleProductDescription = () => {
  return (
    <>
      <div className="product_description_main ">
        <div className="product_description_main2 universal_container">
          <hr style={{
            marginBottom:'0px'
          }} />
          <div className="description_link_div">
            <a style={{
                borderTop:'2px solid grey'
            }}>Description</a>
          
          </div>
          <div className="description_heading_div ">
            <h3>Product Description</h3>
          </div>
          <div className="product_description_para_div mt-4">
            <p>
              Since it’s creation lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            
          </div>
          <div className="product_description_para_div2 mt-5">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="description_heading_div ">
            <h3>More About The Product </h3>
          </div>
          <div className="product_description_para_div2 mt-5">
          <p> Since it’s creation lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
              <div className="product_description_para_div2 mt-5" >
              <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
              </div>
         
          </div>
          
          <div style={{
            display:"flex",
            flexDirection:'column',
            rowGap:"20px"
          }} class="accordion mt-5"  id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Product Features
      </button>
    </h2>
    <div id="" class="accordion-collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>Material:</strong> Good quality cotton fabric, with a soft and comfortable texture.<br/><br/>
       <strong>Layering:</strong> Double-layered construction, featuring a inner layer of plain cotton and an outer layer of Kantha-embroidered cotton.<br/><br/>
       <strong>Embroidery:</strong>  Exquisite Kantha embroidery adorns the outer layer, showcasing intricate patterns, floral motifs, and geometric shapes.<br/><br/>
       <strong>Occasion:</strong>  Perfect for everyday wear, casual outings, or as a statement piece for cultural events. <br/><br/>
      <strong>Unique feature</strong> : The double-layered construction adds warmth and texture, while the Kantha embroidery makes each piece a one-of-a-kind treasure.<br/><br/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Care Instructions
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <>Dry wash only Medium iron</>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Shippins & Returns
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <>We ship across India Shipping is free for all prepaid order ( except J&K and NORTH EASTERN states)   The dispatch timeline is 1-2 working days, but might extend by 2-3 more days since we work on source/make to order basis   Return- only defective products ( opening video is must).</>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Country Of Origin
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        India
      </div>
    </div>
  </div>
</div>

    <div className="description_heading_div ">
            <h3>Ratings & Reviews </h3>
            
            <Review/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SingleProductDescription
