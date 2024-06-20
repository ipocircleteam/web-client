import React from 'react'
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link'
import { Cross } from '../../../public/icons'

export default function MobileSidebar(props: { callback: () => void }) {
  return (
    <div className="">
      <div
        id="menu-overlay"
        className="fixed hidden z-10 top-0 w-[100%] h-[100vh]"
        onClick={() => {
          $('#Menulist').toggleClass('custom-menu-pos')
          $('#menu-overlay').addClass('hidden')
        }}
      ></div>

      <div
        id="Menulist"
        className="custom-menu-transition shadow-lg bg-base fixed z-50 top-0 w-[70%] sm:w-[60%] h-[100vh] p-2 text-left"
      >
        <MobileNavbar callback={props.callback} />
      </div>
    </div>
  )
}

function MobileNavbar(props: { callback: () => void }) {
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

      <div
        className="m-2 text-[20px]"
        onClick={() => {
          props.callback()
        }}
      >
        <Link
          href="/gmp"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          GMP
        </Link>
      </div>

      <div
        className="m-2 text-[20px]"
        onClick={() => {
          props.callback()
        }}
      >
        <Link
          href="/ipo"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPOs
        </Link>
      </div>

      <div
        className="m-2 text-[20px]"
        onClick={() => {
          props.callback()
        }}
      >
        <Link
          href="/ipotracker"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPO Tracker
        </Link>
      </div>

      <div
        className="m-2 text-[20px]"
        onClick={() => {
          props.callback()
        }}
      >
        <Link
          href="/optiorder"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPO Pulse
        </Link>
      </div>

      <div
        className="m-2 text-[20px]"
        onClick={() => {
          props.callback()
        }}
      >
        <Link
          href="/algorithm"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Ask Maverick
        </Link>
      </div>
    </>
  )
}
