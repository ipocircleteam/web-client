'use client'

import React from 'react'
import MenuList from './menu-list'
import $ from 'jquery'
import Navbar from './navbar'

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
    <div
      data-testid="small-menu"
      className="w-[100vw] mx-auto container max-w-9l "
    >
      <Navbar callback={openMenu} />
      <MenuList callback={closeMenu} />
    </div>
  )
}
