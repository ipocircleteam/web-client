import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoSample } from '../../../public/logo'
import CTAbutton from '../Buttons/cta-btn'

export default function LargeMenu() {
  return (
    <div
      className="p-[10px] m-0 w-[100vw] flex justify-between items-center border-b-2"
      data-testid="large-menu"
    >
      <Link href="/">
        <Image
          className="ml-5"
          alt="IPOCircle"
          height={80}
          src={LogoSample}
          width={80}
        />
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
