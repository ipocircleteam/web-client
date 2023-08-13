import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LargeMenu() {
    return (
        <div
      className="p-2 m-0 w-[100vw] flex justify-between items-center fixed
      top-0 border-b-2"
        data-testid="large-menu"
    >
      <div className=' m-0'>
        <Image alt="IPOCircle" height={50} src="/" width={80} />
      </div>

      <div className=' m-0 flex justify-end items-center px-2'>
        <Link href="/gmp" className='mx-4 text-primary hover:text-secondary font-semibold'>GMP</Link>
        <Link href="/ipo" className='mx-4 text-primary hover:text-secondary font-semibold'>IPOs</Link>
        <Link href="/ipotracker" className='mx-4 text-primary hover:text-secondary font-semibold'>Analyse</Link>
        <button
          className='mx-4 text-primary bg-secondary py-2 px-4 font-semibold rounded-lg border border-secondary
          hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary'
        >Free Consulting
        </button>
      </div>
    </div>
    )
}