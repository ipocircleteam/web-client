import './globals.css'
import { Raleway } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'

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
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
