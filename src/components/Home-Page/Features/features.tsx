import React from 'react'
import Image from 'next/image'
import { Dashboard } from '../../../../public/images'
import FeatureDesc from './feature-desc'

export default function Features() {
  return (
    <div className="my-[20px] mt-[2rem] lg:mt-[5rem] w-[80vw] mx-auto mb-[110px]">
      <div className="text-center text-primary font-bold leading-tight text-[2rem] lg:mb-[50px]">
        <h1>Why you should trust us?</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <FeatureDesc />

        <div className="w-[100%] lg:w-[50%] h-[auto] lg:h-[350px] rounded-2xl border overflow-hidden">
          <Image src={Dashboard} alt="" />
        </div>
      </div>
    </div>
  )
}
