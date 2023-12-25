import React from 'react'
import { CallBackType } from '../../lib/types/menu.types'
import $ from 'jquery'
import { SmallNavigationLinks } from './navigationLinks'

export default function MenuList(props: CallBackType) {
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
        <SmallNavigationLinks callback={props.callback} />
      </div>
    </div>
  )
}
