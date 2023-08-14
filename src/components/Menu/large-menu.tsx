import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../../../public/logo'
import CTAbutton from '../Buttons/cta-btn'

export default function LargeMenu() {
  return (
    <div
      className="px-[10px] py-[5px] m-0 w-[100vw] flex justify-between items-center border-b-2"
      data-testid="large-menu"
    >
      <Link href="/">
        <div className="flex justify-center items-center text-[1.5rem] font-bold">
          <Image
            className="ml-5 m-0 p-0"
            alt="IPOCircle"
            height={45}
            src={Logo}
            width={160}
          />
          {/* <label className='text-primary ml-1'>IPO</label><label className='text-secondary'>Circle</label> */}
        </div>
      </Link>

      <div className="m-0 flex justify-end items-center px-2">
        <Link
          href="/gmp"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          GMP
        </Link>

        <Link
          href="/ipo"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPOs
        </Link>

        <Link
          href="/ipotracker"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Analyse
        </Link>

        <CTAbutton
          text="Free Consulting"
          function={() => {
            window.location.replace('/consultation')
          }}
        />
      </div>
    </div>
  )
}
