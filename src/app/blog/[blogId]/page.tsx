'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'
import Footer from '@/components/Footer/footer'

export default function ArticlePage() {
  const path = usePathname()

  return (
    <>
      <Menu />
      <div className="mt-[60px]">
        <h1>ID for selected blog is -: {path}</h1>
      </div>
      <Footer />
    </>
  )
}
