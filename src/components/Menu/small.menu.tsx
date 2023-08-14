import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CallBackType } from './menu.types'
import { Bars } from '../../../public/icons'
import { Logo } from '../../../public/logo'
import MenuList from './menu-list'
import $ from 'jquery'

export default function SmallMenu() {
  const openMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
    $('#menu-overlay').removeClass('hidden')
  }

  const closeMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
    $('#menu-overlay').addClass('hidden')
  }

  return (
    <div data-testid="small-menu">
      <Navbar callback={openMenu} />
      <MenuList callback={closeMenu} />
    </div>
  )
}

function Navbar(props: CallBackType) {
  return (
    <div className="flex justify-between items-center border border-bottom px-1 sm:px-2 py-2">
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
