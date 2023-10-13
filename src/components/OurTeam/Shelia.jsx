import React from 'react'
import SheilaImg from '../../assets/sheila-wristberg.png'

const Shelia = () => {
  return (
    <div className='card col-1-4 mb-50'>
        <div className='img'>
            <img src={SheilaImg} alt="Sheila" />
        </div>
        <div className='text'>
            <h3 className='heading-tertiary'>Shelia Wristberg</h3>
            <p className='title primary-text'>Founder & CEO</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
    </div>
  )
}

export default Shelia