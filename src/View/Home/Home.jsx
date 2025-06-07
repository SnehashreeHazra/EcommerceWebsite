import React from 'react'
import HomeBanner from './HomeBanner'
import './Home.css'
import HomeCategories from './HomeCategories'
import InSpotlight from './InSpotlight'
import HomeParallax from './HomeParallax'
import Quality from './Quality'
import Testimonial from './Testimonial'
import Footer from '../../Layout/Footer'
import NewArrivals from './NewArrivals'
const Home = () => {
  return (
    <>
      <HomeBanner/>
      <HomeCategories/>
      <NewArrivals/>
      <InSpotlight/>
      <HomeParallax/>
      <Quality/>
      <Testimonial/>
    </>
  )
}

export default Home
