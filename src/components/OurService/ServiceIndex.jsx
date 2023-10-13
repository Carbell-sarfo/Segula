import React from 'react'
import LinkedInOpt from './LinkedInOpt'
import PerBranding from './PerBranding'
import WebDesign from './WebDesign'
import PhotoVideo from './PhotoVideo'

const ServiceIndex = () => {
  return (
    <div className='section-services'>
      <div className="container wrapper">
      <div className='text-center mb-50'>
            <h1 className='heading-secondary'>Our Services</h1>
        </div>
        <LinkedInOpt />
        <PerBranding />
        <WebDesign />
        <PhotoVideo />
      </div>
    </div>
  )
}

export default ServiceIndex