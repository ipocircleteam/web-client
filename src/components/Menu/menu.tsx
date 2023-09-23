'use client'

import React from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import LargeMenu from './large-menu'
import SmallMenu from './small.menu'

export default function Menu() {
  const width = useWindowWidth()

  return (
    <div className="fixed top-0 z-50 bg-white">
      {width && width > 600 ? <LargeMenu /> : <SmallMenu />}
    </div>
  )
}
