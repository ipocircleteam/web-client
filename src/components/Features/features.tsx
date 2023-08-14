import React from 'react'
import FeatureCard from './feature-card'
import FeatureCardTwo from './feature-card-two'
import Image from 'next/image'
import { Dashboard } from '../../../public/images'

export default function Features() {
  return (
    <div className="my-[20px] mt-[2rem] lg:mt-[5rem] w-[80vw] mx-auto mb-[110px]">
      <div className="text-center text-primary font-bold leading-tight text-[2rem] lg:mb-[50px]">
        <h1>Why you should trust us?</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <FeaturePoints />

        <div className="w-[100%] lg:w-[50%] h-[auto] lg:h-[350px] rounded-2xl border overflow-hidden">
          <Image src={Dashboard} alt="" />
        </div>
      </div>
    </div>
  )
}

function FeaturePoints() {
  return (
    <div className="w-[100%] lg:w-[40%]">
      <section className="w-[100%] lg:w-[80%] mx-auto lg:mx-4 my-4">
        <h1 className="text-primary font-semibold text-[1.5rem]">
          Data backed decisions
        </h1>
        <p>
          Our every advice is deep rooted onto previous data set and trends.
        </p>
      </section>

      <section className="w-[100%] lg:w-[80%] mx-auto lg:mx-4 my-4">
        <h1 className="text-primary font-semibold text-[1.5rem]">
          Subjective customisation
        </h1>
        <p>
          We consider your risk profile, ammount to be invested, etc to help you
          increase profit probability
        </p>
      </section>

      <section className="w-[100%] lg:w-[80%] mx-auto lg:mx-4 my-4">
        <h1 className="text-primary font-semibold text-[1.5rem]">
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
