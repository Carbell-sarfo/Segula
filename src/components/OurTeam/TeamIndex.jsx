import React from 'react'
import Shelia from './Shelia'
import Carbell from './Carbell'
import Winnard from './Winnard'
import Richmond from './Richmond'

const TeamIndex = () => {
  return (
    <div className='section-team'>
      <div className="container wrapper">
        <div className='text-center mb-50'>
            <h1 className='heading-secondary'>Our Team</h1>
        </div>
        <Shelia />
        <Carbell />
        <Winnard />
        <Richmond />
      </div>
    </div>
  )
}

export default TeamIndex