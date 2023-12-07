import React from 'react'
import Link from 'next/link'

export default function PageLinks() {
  return (
    <div className="flex justify-start border border-gray-500 text-gray-500 border-r-0 border-l-0 border-t items-start p-2 w-[100%] mx-auto">
      <div className="mx-4">
        <Link href="/about">About</Link>
      </div>
      {/* <Link href="/careers">Careers</Link> */}
      <div className="mx-4">
        <Link href="/privacypolicy">Privacy</Link>
      </div>
      <div className="mx-4">
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  )
}
