'use client'

import React from 'react'
import CTAbutton from '../Buttons/cta-btn'
import Image from 'next/image'

export default function HomwBanner() {
  return (
    <section className="bg-primary mt-[60px] fles justify-between items-center w-[100vw] p-4 px-6">
      <div className="w-[40vw]">
        <h1 className="text-secondary text-[2rem] leading-tight">
          Don't know how IPOs work?
        </h1>
        <p className="text-base text-[1.3rem] font-thin leading-tight mb-[20px]">
          Explore our one stop solution to learn about the whole IPO ecosystem
          and to get sure shot profit by investing in IPOs
        </p>
        <button
          onClick={() => {
            window.location.replace('/guides')
          }}
          className="bg-secondary py-2 px-8 font-semibold rounded-lg border border-secondary
                    hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
        >
          Let's Go
        </button>
      </div>

      <div>
        <Image src="" alt="" />
      </div>
    </section>
  )
}
