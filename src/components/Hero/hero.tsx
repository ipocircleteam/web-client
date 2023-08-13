'use client'

import React from 'react'
import CTAbutton from '../Buttons/cta-btn'
import LargeCTAbutton from '../Buttons/large-cta-btn'

export default function Hero() {
  return (
    <div className="my-6 md:my-4 text-center">
      <span className="flex justify-center items-center w-[95vw] mx-auto">
        <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1] ">
          <label className="text-primary">India's first </label>
          <label className="text-secondary">online grey market</label>
        </h1>
      </span>

      <p className="my-4 md:my-2 text-[1.1rem] md:text-[1.3rem] leading-tight text-primary w-[95vw] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a tortor
        leo. Integer <br /> interdum dolor neque, vitae consectetur elit
        interdum vel.
      </p>
      <div className="my-4">
        <LargeCTAbutton text="Free Consulting" function={() => {}} />
      </div>
    </div>
  )
}
