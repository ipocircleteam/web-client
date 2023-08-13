import React from 'react'
import Image from 'next/image'
import { CallBackType } from './menu.types'
import { Bars } from '../../../public/icons'
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
      <div className=" m-0 cursor-pointer">
        <Image alt="IPOCircle" height={50} src="/" width={80} />
      </div>

      <div className="m-0 cursor-pointer">
        <Image
          onClick={props.callback}
          alt="Menu"
          height={20}
          src={Bars}
          width={20}
        />
      </div>
    </div>
  )
}
