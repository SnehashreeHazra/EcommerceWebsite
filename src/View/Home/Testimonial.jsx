import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <>
    <div className='testimonial_wrapper home_categories_wrapper universal_container'>
    <div className='home_categories_head'>
      <h1>
     
    CUSTOMER TESTIMONIALS
     </h1>
     <span className='line_through'></span>
      </div>

      <div className='testimonial_cards_wrapper'>
        <TestimonialCard/>
      </div>
    </div>
    </>
  )
}

export default Testimonial
