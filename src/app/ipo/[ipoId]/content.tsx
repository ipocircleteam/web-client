import React from 'react'
import CompanyDetails from './company-details'
import NameDivider from '@/components/Global/name-divider'
import IpoDetails from './tables/ipo-details'
import IpoTimeTable from './tables/ipo-timetable'
import LotSize from './tables/lot-size'
import PerformanceIndicators from './tables/performance'
import IpoReservation from './tables/ipo-reservation'
import PromoterHoldings from './tables/promoter-holdings'
import CompanyFinancials from './company-financials'
import ObjectIssue from './object-issue'
import GMP from './gmp'
import Subscriptions from './tables/subscriptions'
import AnchorDetails from './tables/anchor-details'

export default function Content() {
  return (
    <div className="w-[90%] mx-auto p-2 border">
      <CompanyDetails />

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[50%]">
          <NameDivider text="IPO Details" width={80} />
          <IpoDetails />
        </div>
        <div className="w-[50%]">
          <NameDivider text="Timetable" width={80} />
          <IpoTimeTable />
        </div>
      </div>

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[50%]">
          <NameDivider text="Lot Size" width={80} />
          <LotSize />
        </div>
        <div className="w-[50%]">
          <NameDivider text="Performance Indicators" width={50} />
          <PerformanceIndicators />
        </div>
      </div>

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[50%]">
          <NameDivider text="IPO Reservation" width={70} />
          <IpoReservation />
        </div>
        <div className="w-[50%]">
          <NameDivider text="Promoter Holdings" width={50} />
          <PromoterHoldings />
        </div>
      </div>

      <CompanyFinancials />
      <ObjectIssue />
      <GMP />

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[50%]">
          <NameDivider text="Anchor Details" width={70} />
          <AnchorDetails />
        </div>
        <div className="w-[50%]">
          <NameDivider text="Subscriptions" width={70} />
          <Subscriptions />
        </div>
      </div>
    </div>
  )
}
