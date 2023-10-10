import React from 'react'
import heroImage from "../assets/hero-img.png"

const HeroSection = () => {
  return (
    <div class="section-hero" id='hero'>
      <div className="container wrapper">
        <div className="hero-container">
          <div className='hero-text'>
              <h1 className='hero-name'>Elevate your presence, expand your reach, and create a meaniful influence</h1>
              <button className='btn btn-primary mr-20'>Send a message</button>
              <button className='btn btn-neutral'>Free Custom Proposal</button>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="Segula Global hero" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection