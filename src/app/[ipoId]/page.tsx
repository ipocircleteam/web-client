'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function IPODetailsPage() {
  const path = usePathname()

  return <h1>ID for selected IPO is -: {path}</h1>
}
