import React from 'react'
import LinkedIn from "../../assets/linkedin.png"

const LinkedInOpt = () => {
  return (
    <div className='card col-1-4 mb-50'>
        <div className='img'>
            <img src={LinkedIn} alt="service-img" />
        </div>
        <div className='text'>
            <h2>Linkedin Optimisation</h2>
            <p className='mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='btn btn-primary'>Schedule a free call</button>
        </div>
    </div>
  )
}

export default LinkedInOpt