'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'
import Navigation from './navigation'
import Content from './content'
import $ from 'jquery'

export default function IPODetailsPage() {
  const path = usePathname()
  const [text, setText] = React.useState('Show Contents')
  const showContents = () => {
    $('#toggleContents').toggleClass('hidden')
    setText(text === 'Show Contents' ? 'Hide Contents' : 'Show Contents')
  }

  return (
    <>
      <Menu />
      <div className="mt-[70px] flex items-start overflow-hidden">
        <div className="mdlg:w-[75vw] lg:w-[80vw] left-0">
          <div className="w-[100%] overflow-hidden">
            <div className="mdlg:hidden px-[20px]">
              <label
                className=" text-[1rem] cursor-pointer underline"
                onClick={showContents}
              >
                {text}
              </label>
              <div className="hidden" id="toggleContents">
                <Navigation />
              </div>
            </div>
            <Content />
          </div>
        </div>

        <div
          className="mdlg:w-[25vw] lg:w-[20vw] h-[100%] p-2 px-4 fixed right-0 border-l hidden mdlg:flex flex-col justify-start 
        items-start bg-white"
        >
          <Navigation />
        </div>
      </div>
    </>
  )
}
