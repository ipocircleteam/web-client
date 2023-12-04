import React from 'react'
import Link from 'next/link'

export default function PageLinks() {
  return (
    <div className="flex justify-around border border-gray-500 border-r-0 border-l-0 border-t items-start p-2 w-[100%] mx-auto">
      <Link href="/about">About</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/privacypolicy">Privacy</Link>
      <Link href="/help">Help</Link>
      <Link href="/contact">Contact Us</Link>
    </div>
  )
}
