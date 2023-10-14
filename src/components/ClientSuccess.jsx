import React from 'react'
import SliderSlick from './SliderSlick'
import testimonialsVideo from "../assets/testimonial-video.mp4"
import testimonialsImage from "../assets/testimonial-background.png"


const ClientSuccess = () => {
  return (
    <div className='section-testimonials'>
      <video autoPlay muted loop className='video-bg' src={testimonialsVideo} poster=''></video>
      <div className="overlay"></div>
      <div className="container wrapper">
      <div className="text-center mb-50">
          <h1 className="heading-secondary white-text">What Clients say</h1>
        </div>
      <SliderSlick />
    </div>
      </div>
  )
}

export default ClientSuccess