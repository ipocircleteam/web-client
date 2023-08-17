'use client'

import React from 'react'
import CTAbutton from '../../Buttons/cta-btn'
import Image from 'next/image'
import { Blog } from '../../../../public/images'

export default function HomeBanner() {
  return (
    <section className="bg-primary mt-[40px] py-[40px] mx-auto md:flex justify-center items-center w-[100vw] p-4 px-6">
      <div className="w-[80vw] md:w-[60vw] lg:w-[50vw] text-center md:text-center mx-auto">
        <h1 className="text-secondary text-[2rem] md:text-[3rem] font-semibold leading-tight">
          Wanna know how IPOs work?
        </h1>

        <h2 className=" text-[#FFFFFF] mt-[10px] md:mt-[0px] text-[1rem] md:text-[1.3rem] font-semibold leading-tight mb-[20px]">
          Explore our one stop solution{' '}
          <label className="text-secondary font-bold">GAMMA</label> to learn
          about the whole IPO ecosystem and to get sure shot profit by investing
          in IPOs
        </h2>

        <button
          onClick={() => {
            window.location.replace('/guides')
          }}
          className="bg-secondary p-2 w-[230px] font-semibold cursor-pointer rounded-lg border border-secondary
                    hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
        >
          Explore GAMMA for FREE
        </button>
      </div>
    </section>
  )
}
