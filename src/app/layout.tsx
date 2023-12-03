import './globals.css'
import { Raleway } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'
import Menu from '@/components/Menu/menu'
import Footer from '@/components/Footer/footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IPOCircle',
  description: 'Providing end to end IPO solutions',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="../../public/logo/logo5.png" />
      </head>
      <body className={raleway.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
