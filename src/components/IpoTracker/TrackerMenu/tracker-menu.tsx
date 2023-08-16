'use client'

import React, { useState } from 'react'
import NavButtons from './nav-buttons'
import Link from 'next/link'
import Image from 'next/image'
import { GreenLogoIcon } from '../../../../public/logo'

export default function TrackerMenu(props: {
  darkMode: boolean
  toggleMode: () => void
}) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    const doc = window.document
    const docEl = doc.documentElement
    if (isFullScreen) {
      doc.exitFullscreen()
    } else {
      docEl.requestFullscreen()
    }
    setIsFullScreen(!isFullScreen)
  }

  const toggleFilters = () => {
    alert('filters')
  }

  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-4">
      <section className="flex justify-start items-center">
        <span className="overflow-hidden w-[60px] mr-2">
          <Link href="/">
            <Image
              src={GreenLogoIcon}
              className="bg-white"
              width={60}
              alt="IPO"
            />
          </Link>
        </span>
        <h1
          className={
            (props.darkMode ? 'text-[#FFFFFF]' : 'text-primary') +
            ' text-[1.9rem] space-x-2 uppercase font-semibold'
          }
        >
          Tracker
        </h1>
      </section>

      <NavButtons
        isFullScreen={isFullScreen}
        darkMode={props.darkMode}
        toggleMode={props.toggleMode}
        toggleFilters={toggleFilters}
        toggleFullScreen={toggleFullScreen}
      />
    </div>
  )
}
