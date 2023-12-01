import React from 'react'
import { CallBackType } from './menu.types'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '../../../public/logo'
import { Bars } from '../../../public/icons'

export default function Navbar(props: CallBackType) {
  return (
    <div className="flex w-[100%] justify-between items-center border border-bottom px-1 sm:px-2 py-2">
      <Link href="/">
        <Image
          className=""
          alt="IPOCircle"
          height={150}
          src={Logo}
          width={150}
        />
      </Link>

      <Image
        onClick={props.callback}
        className="m-0 mx-2 cursor-pointer"
        alt="Menu"
        height={20}
        src={Bars}
        width={20}
      />
    </div>
  )
}
