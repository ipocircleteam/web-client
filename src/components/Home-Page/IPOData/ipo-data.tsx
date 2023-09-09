'use client'

import React, { useState } from 'react'
import { IpoTable } from './ipo-table'
import Link from 'next/link'
import IpoCategory from './ipo-category'
import useWindowWidth from '@/hooks/useWindowWidth'

export function IpoData() {
  const [type, setType] = useState('main')

  const toggleView = (name: string) => {
    setType(() => name)
  }

  const width = useWindowWidth()

  return (
    <section className="mt-[3rem]">
      <IpoCategory callback={toggleView} />
      <IpoTable type={type} />
      <div
        className="text-secondary my-2 text-center w-[100%] mx-auto text-[18px] 
            hover:text-primary cursor-pointer"
      >
        <Link href="/ipo">See All</Link>
      </div>
    </section>
  )
}

function Symbols() {
  return (
    <div className="w-[90vw] mx-auto flex justify-center items-center">
      <span className="mx-2 flex justify-center items-center">
        <div className="bg-yellow-500 custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-yellow-500">Upcoming</label>
      </span>

      <span className="mx-2 flex justify-center items-center">
        <div className="bg-secondary custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-green-500">Live</label>
      </span>

      <span className="mx-2 flex justify-center items-center">
        <div className="bg-red-500 custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-red-500">Closed</label>
      </span>
    </div>
  )
}
