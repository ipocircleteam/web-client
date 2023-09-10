'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'
import Navigation from './navigation'
import Content from './content'

export default function IPODetailsPage() {
  const path = usePathname()

  return (
    <>
      <Menu />
      <div className="mt-[70px] flex items-start">
        <div className="w-[80%]">
          <Content />
        </div>

        <div
          className="w-[20%] h-[100%] p-2 px-4 fixed right-0 border-l-2 flex flex-col justify-start 
        items-start bg-white"
        >
          <Navigation />
        </div>
      </div>
    </>
  )
}
