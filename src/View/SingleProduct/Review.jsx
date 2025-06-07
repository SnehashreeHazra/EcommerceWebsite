import React from 'react'
import img from '../../assets/images (1).jpeg'
const Review = () => {
    return (
        <>
        {[1,2].map((e,i)=>{
            return(
                <>
  <div className='review_wrapper'>
                <div className='review_profile_wrapper'>
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:"center",
                        columnGap:'7px'
                    }}>
                        <div className='review_circle'>
                            <img src={img}/>
                        </div>
                        <div className='review_name_wrapper'>
                            <p className='para_name'>Nina Singh</p>
                            <p className='para_date'>29 May 2025</p>
                        </div>
                    </div>

<div className='review_rating_wrapper'>
    <div className='rating_wrapper745844'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        <i style={{
            marginLeft:'5px',
            fontSize:'18px',
            color:'black'
        }} class="fa-regular fa-face-smile"></i>
    </div>

</div>
                </div>

                <p className='review_para_clients'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their infancy.</p>

                <div className='like_unlike_wrapper'>
                    <div className='like_div'>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <p>350</p>
                    </div>

                       <div className='like_div'>
                       <i class="fa-solid fa-thumbs-down"></i>
                        <p>20</p>
                    </div>
                </div>
            </div>
                </>
            )
        })}
          
        </>
    )
}

export default Review
