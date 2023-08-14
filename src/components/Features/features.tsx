import React from 'react'
import FeatureCard from './feature-card'
import FeatureCardTwo from './feature-card-two'

export default function Features() {
  return (
    <section className="my-[20px] mt-[30px]">
      <div className="text-center text-primary font-bold text-[2rem]">
        {/* <h1>Why you should trust us?</h1> */}
      </div>

      {/* <FeatureCard /> */}
      <FeatureCardTwo />
    </section>
  )
}
