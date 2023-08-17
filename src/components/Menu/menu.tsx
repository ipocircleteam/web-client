'use client'

import React from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'
import LargeMenu from './large-menu'
import SmallMenu from './small.menu'

export default function Menu() {
  const width = useWindowWidth()

  return <>{width && width > 600 ? <LargeMenu /> : <SmallMenu />}</>
}
