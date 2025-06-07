import React from 'react'
import img1 from '../../assets/OSBTCMS27-3-1.webp'
import img2 from '../../assets/RUHANIOFFWHITE-2_1080x1080.webp'
import img3 from '../../assets/BanarasiKatanSilk1.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows:true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 2,
      },
    },
      {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    ]
  };
  return (
    <>
    <Slider  {...settings}>
   {[img1, img2, img3, img1].map((e, i) => {
        return (
          <>
          
            <div className='testimonial_card'>
              <div className='testimonial_card_img'>
                <img src={e} />
              </div>
              <div className='rating_star_wrapper'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className='testimonial_para'>Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className='testimonial_by'>Sneha Mukherjee</p>
              <p className='testimonial_date'>17/02/2025</p>
            </div>
          </>
        )
      })}
    </Slider>
   

    </>
  )
}

export default TestimonialCard
