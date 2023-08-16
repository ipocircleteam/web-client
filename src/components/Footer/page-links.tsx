import React from 'react'
import Link from 'next/link'

export default function PageLinks() {
  return (
    <div className="flex justify-around items-start p-2 md:p-4 w-[90vw] md:w-[50%]">
      <div className="flex flex-col w-[80px] my-2 md:my-0">
        <h1 className="font-semibold">Company</h1>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/legal">Legal</Link>
        <Link href="/privacypolicy">Privacy</Link>
      </div>

      <div className="flex flex-col w-[80px] my-2 md:my-0">
        <h1 className="font-semibold">Support</h1>
        <Link href="/help">Help Center</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="flex flex-col w-[80px] my-2 md:my-0">
        <h1 className="font-semibold">Learn</h1>
        <Link href="/article1">Article1</Link>
        <Link href="/article2">Article2</Link>
        <Link href="/article3">Article3</Link>
      </div>
    </div>
  )
}
