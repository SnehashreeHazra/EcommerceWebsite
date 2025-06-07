import React from 'react'
import './Home.css'
import img from '../../assets/259c5fac-0bf8-4687-8b45-1c124d1153b5.webp'
const HomeBanner = () => {
  return (
    <>
      <div className='home_banner'>
      <div className='overlay'></div>
        <img className='home_banner_img' src={img}/>
        <div className='universal_container'>
        <div className='home_banner_content'>
            <h1>Summer <br/> Sale  Is Live</h1>
            <h2>Get Upto 50% Off </h2>
            <div className='banner_button_wrapper'>
                <button>Shop Now</button>
                <button>Know More</button>
            </div>
        </div>
        </div>
      
      </div>
      
    </>
  )
}

export default HomeBanner
