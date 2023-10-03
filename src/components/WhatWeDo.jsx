import React from 'react'
import whatAsset from "../assets/who-we-are.png"

const WhatWeDo = () => {
  return (
    <div>
        <h2>What We Do</h2>
        <div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ipsam accusamus qui rem, enim odio ullam distinctio laboriosam necessitatibus beatae praesentium fuga illum saepe blanditiis et. Illum incidunt fugiat provident perspiciatis quo animi! Ullam officiis earum possimus quia nulla quidem?</p>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ipsam accusamus qui rem, enim odio ullam distinctio laboriosam necessitatibus beatae praesentium fuga illum saepe blanditiis et. Illum incidunt fugiat provident perspiciatis quo animi! Ullam officiis earum possimus quia nulla quidem?</p>
                 <button>Call to action</button>
            </div>
            <div>
                <img src={whatAsset} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo