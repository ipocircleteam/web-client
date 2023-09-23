import Link from 'next/link'
import React from 'react'

export default function ProductCard(props: {
  title: string
  link: string
  desc: string
}) {
  return (
    <Link href={props.link}>
      <div className="w-[300px] h-[200px] hover:border border-secondary hover:bg-blue-100 bg-blue-50 cursor-pointer mx-[20px] my-[10px] rounded-lg justify-center flex flex-col items-center">
        <h1 className="text-secondary text-[1.5rem] font-semibold">
          {props.title}
        </h1>
        <p className="w-[80%] text-center">{props.desc}</p>
      </div>
    </Link>
  )
}
