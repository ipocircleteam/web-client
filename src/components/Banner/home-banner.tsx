'use client'

import React from 'react'
import CTAbutton from '../Buttons/cta-btn'
import Image from 'next/image'
import { Blog } from '../../../public/images'

export default function HomwBanner() {
  return (
    <section className="bg-primary mt-[40px] mx-auto md:flex justify-center items-center w-[100vw] p-4 px-6">
      <div className="w-[80vw] md:w-[60vw] lg:w-[50vw] text-center md:text-left mx-auto">
        <h1 className="text-secondary text-[2rem] md:text-[3rem] font-semibold leading-tight">
          Don't know how IPOs work?
        </h1>

        <h2 className=" text-[#FFFFFF] mt-[10px] md:mt-[0px] text-[1rem] md:text-[1.3rem] font-thin leading-tight mb-[20px]">
          Explore our one stop solution{' '}
          <label className="text-secondary font-bold">GAMMA</label> to learn
          about the whole IPO ecosystem and to get sure shot profit by investing
          in IPOs
        </h2>

        <button
          onClick={() => {
            window.location.replace('/guides')
          }}
          className="bg-secondary p-2 w-[230px] font-semibold rounded-lg border border-secondary
                    hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
        >
          Explore GAMMA for FREE
        </button>
      </div>

      <div className="w-[50vw] mx-auto my-2 md:my-0 md:w-[50vw] lg:w-[40vw] flex justify-center md:justify-end">
        <Image src={Blog} alt="" />
      </div>
    </section>
  )
}
