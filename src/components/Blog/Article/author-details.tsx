'use client'

import React from 'react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

export default function AuthorDetails(props: {
  authorDp: string
  authorName: string
  createdAt: string
  authorDesignation: string
}) {
  return (
    <section className="flex justify-start items-center h-]">
      {/* author details */}
      <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-secondary rounded-full overflow-hidden ">
        <CldImage width={50} height={50} src={props.authorDp} alt="Profile" />
      </span>
      <span className="mx-2 leading-tight text-left">
        <span className="flex justify-start items-center m-0 p-0">
          <h3 className="text- font-semibold mr-2 text-[1rem] md:text-[1.1rem]">
            {props.authorName}
          </h3>
          <p className="text-gray-500 text-[0.8rem] md:text-[1rem]">
            {props.createdAt}
          </p>
        </span>
        <p className="p-0 text-[0.9rem] md:text-[1rem]">
          {props.authorDesignation}
        </p>
      </span>
    </section>
  )
}
