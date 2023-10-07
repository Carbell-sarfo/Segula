import React from 'react'
import whatAsset from "../assets/who-we-are.png"

const WhatWeDo = () => {
  return (
    <div className='section-proposition'>
      <div className="container wrapper">
        <div className="text-center mb-50">
          <h2 className='heading-secondary'>What We Do</h2>
        </div>
        <div className='col-1-2'>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore excepturi commodi beatae tenetur explicabo, vitae ab? Dolorem magnam cum voluptatibus dolores perspiciatis magni consectetur dolor ipsam, aspernatur maiores laborum?</p>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ipsam accusamus qui rem, enim odio ullam distinctio laboriosam necessitatibus beatae praesentium fuga illum saepe blanditiis et. Illum incidunt fugiat provident perspiciatis quo animi! Ullam officiis earum possimus quia nulla quidem?</p>
                <b></b>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ipsam accusamus qui rem, enim odio ullam distinctio laboriosam necessitatibus beatae praesentium fuga illum saepe blanditiis et. Illum incidunt fugiat provident perspiciatis quo animi! Ullam officiis earum possimus quia nulla quidem?</p>
                 <button className='btn btn-primary mt-20'>Call to action</button>
            </div>
            <div>
                <img src={whatAsset} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo