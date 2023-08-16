import React from 'react'

export default function TrendingCard(props: { title: string; desc: string }) {
  return (
    <section className="my-2 md:my-4">
      <h1 className="text- font-semibold text-[1.1rem] md:text-[1.4rem] leading-tight">
        {props.title}
      </h1>
      <p className="leading-tight text-[1rem] md:text-[1rem] text-gray-600">
        {props.desc.substring(0, 80)}
      </p>
    </section>
  )
}
