'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'

export default function IPODetailsPage() {
  const path = usePathname()

  return (
    <>
      <Menu />
      <h1>ID for selected IPO is -: {path}</h1>
    </>
  )
}
