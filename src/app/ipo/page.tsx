import Footer from '@/components/Footer/footer'
import { IpoData } from '@/components/Home-Page/IPOData'
import IpoDatabase from '@/components/Ipo/ipo-database'
import Menu from '@/components/Menu/menu'
import React from 'react'

export default function IPO() {
  return (
    <div className="mt-[80px]">
      <Menu />
      <IpoDatabase />
      <Footer />
    </div>
  )
}
