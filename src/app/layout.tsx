import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'
import Menu from '@/components/Menu/menu'
import Footer from '@/components/Footer'
import Script from 'next/script'

const roboto = Roboto({ style: 'normal', weight: '300', subsets: ['latin'] })

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="analytics-script">
        {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <head>
        <link rel="icon" type="image/png" href="../../public/logo/logo5.png" />
      </head>
      <body className={roboto.className}>
        <Menu />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
