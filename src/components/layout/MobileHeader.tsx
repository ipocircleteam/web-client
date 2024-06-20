'use client'

import React from 'react'
import MenuList from './MobileSidebar'
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../../../public/logo'
import { Bars } from '../../../public/icons'

export default function MobileHeader() {
  const openMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
    $('#menu-overlay').removeClass('hidden')
  }

  const closeMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
    $('#menu-overlay').addClass('hidden')
  }

  return (
    <div data-testid="small-menu" className="w-[100%] mx-auto max-w-9l ">
      <div className="flex w-[100vw] justify-between items-center border border-bottom px-1 sm:px-2 py-2">
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
          onClick={openMenu}
          className="m-0 mx-2 cursor-pointer"
          alt="Menu"
          height={20}
          src={Bars}
          width={20}
        />
      </div>
      <MenuList callback={closeMenu} />
    </div>
  )
}
