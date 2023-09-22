'use client'

import React, { useState } from 'react'
import NavButtons from './nav-buttons'
import Link from 'next/link'
import Image from 'next/image'
import { GreenLogoIcon } from '../../../../public/logo'
import Filter from '../TrackerFilter/filter'
import $ from 'jquery'
import { TrackerMenuType } from './trackermenu.types'

export default function TrackerMenu(props: TrackerMenuType) {
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

  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-2">
      <section className="flex justify-start items-center">
        <h1
          className={
            (props.darkMode ? 'text-[#FFFFFF]' : 'text-primary') +
            ' text-[1.5rem] space-x-2 uppercase font-semibold leading-loose'
          }
        >
          IPO Tracker
        </h1>
      </section>
    </div>
  )
}
