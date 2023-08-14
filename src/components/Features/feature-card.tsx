import React from 'react'
import Image from 'next/image'
import { FeatureCardType } from './feature.type'
import { Data, Analysis, Customize } from '../../../public/images'

export default function FeatureCard() {
  return (
    <div>
      <div className="w-[70vw] mx-auto flex justify-between items-center p-4">
        <section className="">
          <Image src={Data} alt="" width={200} height={200} />
        </section>

        <section className="w-[60%] mx-4 ">
          <h1 className="text-primary font-semibold text-[2rem]">
            Data backed decisions
          </h1>
          <p>
            Our every advice is deep rooted onto previous data set and trends.
          </p>
        </section>
      </div>

      <div className="w-[70vw] mx-auto flex justify-between items-center p-4">
        <section className="w-[60%] mx-4 ">
          <h1 className="text-primary font-semibold text-[2rem]">
            Subjective customisation
          </h1>
          <p>
            We consider your risk profile, ammount to be invested, etc to help
            you increase profit probability
          </p>
        </section>

        <section className="">
          <Image src={Customize} alt="" width={200} height={200} />
        </section>
      </div>

      <div className="w-[70vw] mx-auto flex justify-between items-center p-4">
        <section className="">
          <Image src={Analysis} alt="" width={200} height={200} />
        </section>

        <section className="w-[60%] mx-4 ">
          <h1 className="text-primary font-semibold text-[2rem]">
            In depth analysis
          </h1>
          <p>
            Highly interactive and beginner friendly graphs helps you to take
            smart decisions.
          </p>
        </section>
      </div>
    </div>
  )
}
