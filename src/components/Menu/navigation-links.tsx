import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cross } from '../../../public/icons'
import CTAbutton from '../Buttons/cta-btn'

export function LargeNavigationLinks() {
  return (
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
  )
}

export function SmallNavigationLinks(props: { callback: () => void }) {
  return (
    <>
      <div className="flex m-0 border border-t-0 border-l-0 border-r-0 cursor-pointer justify-end items-center px-4 pt-2">
        <Image
          onClick={props.callback}
          alt="Menu"
          height={20}
          src={Cross}
          width={20}
          className="my-2"
        />
      </div>

      <div className="m-2 text-[20px]">
        <Link
          href="/gmp"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          GMP
        </Link>
      </div>

      <div className="m-2 text-[20px]">
        <Link
          href="/ipo"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPOs
        </Link>
      </div>

      <div className="m-2 text-[20px]">
        <Link
          href="/ipotracker"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Analyser
        </Link>
      </div>

      <div className="m-2">
        <CTAbutton text="Free Consulting" function={() => {}} />
      </div>
    </>
  )
}
