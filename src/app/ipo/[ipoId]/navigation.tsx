import React from 'react'

export default function Navigation() {
  return (
    <>
      <label className="text-gray-400">Items on this page</label>
      <NavigationItem text="Company Details" id="#companyDetails" />
      <NavigationItem text="IPO Details" id="#ipoDetails" />
      <NavigationItem text="IPO Reservation" id="#ipoReservation" />
      <NavigationItem text="IPO Timetable" id="#ipoTimetable" />
      <NavigationItem text="Promoter Holdings" id="#promoterHoldings" />
      <NavigationItem text="IPO Lot Size" id="#ipoLotSize" />
      <NavigationItem text="Company Financials" id="#companyFinancials" />
      <NavigationItem
        text="Performance Indicators"
        id="#performanceIndicators"
      />
      <NavigationItem text="Object of Issue" id="#objectOfIssue" />
      <NavigationItem text="DOas Limit" id="#doasLimit" />
      <NavigationItem text="Company COntact" id="#companyContact" />
      <NavigationItem text="Registrar Contact" id="#registrarContact" />
      <NavigationItem text="GMP" id="#gmp" />
      <NavigationItem text="Subscriptions Table" id="#subscriptionsTable" />
      <NavigationItem text="Anchor Details" id="#anchorDetails" />
      <NavigationItem text="Our Review" id="#ourReview" />
      <NavigationItem text="Discussions" id="#discussions" />
    </>
  )
}

function NavigationItem(props: { text: string; id: string }) {
  return (
    <a href={props.id}>
      <label className="my-[3px] cursor-pointer">{props.text}</label>
    </a>
  )
}
