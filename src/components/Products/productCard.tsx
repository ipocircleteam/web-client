import Link from 'next/link'
import React from 'react'

export default function ProductCard(props: { title: string; link: string }) {
  return (
    <Link href={props.link}>
      <div className="w-[300px] h-[200px] hover:bg-blue-100 bg-blue-50 cursor-pointer mx-[20px] my-[10px] rounded-lg justify-center flex items-center">
        <h1 className="text-primary text-[1.5rem] font-semibold">
          {props.title}
        </h1>
      </div>
    </Link>
  )
}
