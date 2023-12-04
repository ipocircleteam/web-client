'use client'

import React from 'react'
import $ from 'jquery'
import { ipoDetailsItems } from '@/data'

export default function Navigation() {
  return (
    <>
      <div className="hidden lg:flex justify-start items-center">
        {ipoDetailsItems.map((item, index) => {
          return (
            <NavigationItem
              text={item.text}
              id={item.id}
              key={'item-' + index}
            />
          )
        })}
      </div>
      {/* <div className="block lg:hidden">
        <NavigationItem text="Ipo details" id="ipoDetails" />
        <NavigationItem text="Ipo Timetable" id="ipoTimetable" />
        <NavigationItem text="Lot Size" id="lotSize" />
        <NavigationItem
          text="Performance Indicators"
          id="performanceIndicators"
        />
        <NavigationItem text="Company Financials" id="companFinancials" />
        <NavigationItem text="Subscriptions" id="subscriptionsTable" />
      </div> */}
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
      $(id).addClass('hover:bg-blue-100 hover:text-blue-500')
    })

    let id = '#link-' + props.id
    $(id).addClass('bg-primary text-white font-bold')
    $(id).removeClass('hover:bg-blue-100 hover:text-blue-500')
  }

  return (
    <div
      id={'link-' + props.id}
      onClick={highlightSection}
      className="hover:bg-blue-100 text-[15px] flex justify-center items-center hover:text-blue-500 hover:font-bold border-primary rounded-md w-[60%] my-[5px] h-[40px]"
    >
      <label className="my-[3px] cursor-pointer">{props.text}</label>
    </div>
  )
}
