import React from 'react'

export default function FeatureDesc() {
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
