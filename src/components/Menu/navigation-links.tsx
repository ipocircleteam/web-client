import React from 'react'
import Image from 'next/image'
import { Cross } from '../../../public/icons'
import CTAbutton from '../Buttons/cta-btn'

export function LargeNavigation() {
  return (
    <div className="m-0 flex justify-end items-center px-2">
      <a
        href="/gmp"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        GMP
      </a>

      <a
        href="/ipo"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        IPOs
      </a>

      <a
        href="/ipotracker"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        IPO Tracker
      </a>

      <a
        href="/marketanalyser"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        Market Analyser
      </a>

      <a
        href="/algorithm"
        className="mx-4 text-[1.6rem] md:text-[1.1rem] bg-secondary p-2 px-4 font-semibold rounded-lg border border-secondary
          hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
      >
        Ask Jarvis
      </a>
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
        <a
          href="/gmp"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          GMP
        </a>
      </div>

      <div className="m-2 text-[20px]">
        <a
          href="/ipo"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPOs
        </a>
      </div>

      <div className="m-2 text-[20px]">
        <a
          href="/ipotracker"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPO Tracker
        </a>
      </div>

      <div className="m-2 text-[20px]">
        <a
          href="/marketanalyser"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Market analyser
        </a>
      </div>

      <div className="m-2 text-[20px]">
        <a
          href="/algorithm"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Ask Jarvis
        </a>
      </div>
    </>
  )
}
