import React from 'react'

export default function Navigation() {
  return (
    <>
      <label className="text-gray-400">Items on this page</label>
      <NavigationItem text="Company Details" />
      <NavigationItem text="IPO Details" />
      <NavigationItem text="IPO Reservation" />
      <NavigationItem text="IPO Timetable" />
      <NavigationItem text="Promoter Holdings" />
      <NavigationItem text="IPO Lot Size" />
      <NavigationItem text="Company Financials" />
      <NavigationItem text="Performance Indicators" />
      <NavigationItem text="Object of Issue" />
      <NavigationItem text="DOas Limit" />
      <NavigationItem text="Company COntact" />
      <NavigationItem text="Registrar Contact" />
      <NavigationItem text="GMP" />
      <NavigationItem text="Subscriptions Table" />
      <NavigationItem text="Anchor Details" />
      <NavigationItem text="Our Review" />
      <NavigationItem text="Discussions" />
    </>
  )
}

function NavigationItem(props: { text: string }) {
  return <label className="my-[3px] cursor-pointer">{props.text}</label>
}
