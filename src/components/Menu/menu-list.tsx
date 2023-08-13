import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cross } from '../../../public/icons'
import { CallBackType } from './menu.types'

export default function MenuList(props: CallBackType) {
  return (
    <div
      id="Menulist"
      className="custom-menu-transition shadow-lg bg-base fixed top-0 w-[50vw] h-[50vh] p-2 text-left"
    >
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
          Analyse
        </Link>
      </div>
          <div className='m-2'>
          <button
        className="text-primary text-[20px] bg-secondary py-2 px-4 font-semibold rounded-lg border border-secondary
          hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
      >
        Free Consulting
      </button>
      </div>
    </div>
  )
}
