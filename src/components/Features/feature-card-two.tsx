import React from 'react'
import Image from 'next/image'
import { FeatureCardType } from './feature.type'
import { Data, Analysis, Customize } from '../../../public/images'

export default function FeatureCardTwo() {
  return (
    <div className="w-[80vw] mx-auto flex justify-center items-center p-4">
      <section className="">
        <Image src={Analysis} alt="" width={300} height={300} />
      </section>

      <section className="w-[60%] mx-4 ">
        <h1 className="text-primary font-semibold text-[2rem] mt-2">
          Data backed decisions
        </h1>
        <label>
          Our every advice is deep rooted onto previous data set and trends.
        </label>

        <h1 className="text-primary font-semibold text-[2rem] mt-2">
          Subjective customisation
        </h1>
        <p>
          We consider your risk profile, ammount to be invested, etc to help you
          increase profit probability
        </p>

        <h1 className="text-primary font-semibold text-[2rem] mt-2">
          In depth analysis
        </h1>
        <p>
          Highly interactive and beginner friendly graphs helps you to take
          smart decisions.
        </p>
      </section>
    </div>
  )
}
