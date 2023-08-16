'use client'

import React from 'react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

export default function ArticleContent(props: {
  title: string
  desc: string
  image: string
}) {
  return (
    <section className="md:flex my-2 md:my-2 flex-wrap justify-between items-center">
      {/* blog content */}
      <span className="md:w-[70%]">
        <h1 className="text-primary font-semibold text-[1.6rem] md:text-[1.8rem] leading-tight">
          {props.title}
        </h1>
        <p className="leading-tight text-justify text-[1rem] md:text-[1rem] my-2 text-primary">
          {props.desc.substring(0, 300)}
        </p>
      </span>
      <span className="w-[100%] md:w-[30%] my-[15px] md:my-0 overflow-hidden justify-center sm:justify-start md:justify-center flex">
        <CldImage
          width={250}
          height={300}
          className="rounded-xl w-[100%] sm:w-[90%] md:w-[80%]"
          src={props.image}
          alt={props.title}
        />
      </span>
    </section>
  )
}
