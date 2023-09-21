'use client'

import React from 'react'
import $ from 'jquery'
import { ipoDetailsItems } from '@/data'

export default function Navigation() {
  return (
    <>
      {ipoDetailsItems.map((item, index) => {
        return (
          <NavigationItem text={item.text} id={item.id} key={'item-' + index} />
        )
      })}
    </>
  )
}

function NavigationItem(props: { text: string; id: string }) {
  function scrollToDiv(targetId: string) {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID "${targetId}" not found.`)
    }
  }

  const highlightSection = async () => {
    scrollToDiv(props.id)
    ipoDetailsItems.forEach((element) => {
      let id = '#link-' + element.id
      $(id).removeClass('border bg-primary text-white font-bold')
    })

    let id = '#link-' + props.id
    $(id).removeClass('hover:bg-blue-100 hover:text-blue-500 hover:font-bold')
    $(id).addClass('bg-primary ')
  }

  return (
    <div
      id={'link-' + props.id}
      onClick={highlightSection}
      className="hover:bg-blue-100 hover:text-blue-500 hover:font-bold border-primary rounded-lg p-[5px] w-[220px] my-[1px] h-40px]"
    >
      <label className="my-[3px] cursor-pointer">{props.text}</label>
    </div>
  )
}
