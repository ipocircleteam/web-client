'use client'

import React from 'react'
import CTAbutton from '../Buttons/cta-btn'
import LargeCTAbutton from '../Buttons/large-cta-btn'

export default function Hero() {
  return (
    <div className="my-[50px] md:mt-[4rem] md:mb-0 text-center ">
      <span className="flex justify-center items-center w-[85vw] sm:w-[95vw] mx-auto">
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[1] ">
          <label className="text-primary">India's first </label>
          <label className="text-secondary">online grey market</label>
        </h1>
      </span>

      <p
        className="my-4 md:my-2 text-[1rem] md:text-[1.5rem] leading-tight text-primary 
      w-[90vw] sm:w-[95vw] mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Sed a tortor leo.
      </p>
      <div className="my-4">
        <LargeCTAbutton text="Free Consulting" function={() => {}} />
      </div>
    </div>
  )
}
