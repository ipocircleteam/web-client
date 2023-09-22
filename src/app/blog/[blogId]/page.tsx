import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'
import Footer from '@/components/Footer/footer'

export default function ArticlePage() {
  const path = usePathname()

  return (
    <>
      {/* <Menu />
      <h1>ID for selected blog is -: {path}</h1>
      <Footer /> */}
    </>
  )
}
