'use client'

import React, { useState } from 'react'
import { IpoTable } from './ipo-table'
import Link from 'next/link'
import IpoCategory from './ipo-category'

export function IpoData() {
  const [type, setType] = useState('main')

  const toggleView = (name: string) => {
    setType(() => name)
  }

  return (
    <section className="mt-[3rem]">
      <IpoCategory callback={toggleView} />

      <IpoTable type={type} />

      <div
        className="text-secondary my-2 text-center w-[100%] mx-auto text-[18px] 
            hover:text-primary cursor-pointer"
      >
        <Link href="/ipos">See All</Link>
      </div>
    </section>
  )
}
