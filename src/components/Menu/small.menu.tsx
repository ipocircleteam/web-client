import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CallBackType } from './menu.types'
import { Bars } from '../../../public/icons'
import { LogoSample } from '../../../public/logo'
import MenuList from './menu-list'
import $ from 'jquery'

export default function SmallMenu() {
  const openMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
  }

  const closeMenu = () => {
    $('#Menulist').toggleClass('custom-menu-pos')
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
    <div className="flex justify-between items-center border border-bottom px-4 pt-2">
      <Link href="/">
        <Image
          className="ml-5"
          alt="IPOCircle"
          height={80}
          src={LogoSample}
          width={80}
        />
      </Link>

      <Image
        onClick={props.callback}
        className="m-0 cursor-pointer"
        alt="Menu"
        height={20}
        src={Bars}
        width={20}
      />
    </div>
  )
}
