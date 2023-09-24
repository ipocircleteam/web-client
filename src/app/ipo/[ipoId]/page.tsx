'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu/menu'
import Navigation from './navigation'
import Content from './content'
import $ from 'jquery'
import Footer from '@/components/Footer/footer'
import {
  AnchorDetailsData,
  CompanyContactData,
  CompanyDetailsData,
  CompanyFinancialData,
  DataPanelData,
  DocumentsData,
  GmpData,
  IpoDetailsData,
  IpoReservationData,
  IpoTimetableData,
  LotSizeData,
  ObjectIssueData,
  PerformanceData,
  PromoterHoldingsData,
  RegistrarContactData,
  ReviewData,
  SubscriptionsData,
} from '../initial.data'

export default function IPODetailsPage() {
  const path = usePathname()
  const [text, setText] = React.useState('Show Contents')
  const showContents = () => {
    $('#toggleContents').toggleClass('hidden')
    setText(text === 'Show Contents' ? 'Hide Contents' : 'Show Contents')
  }

  return (
    <>
      <Menu />
      <div className="mt-[70px] flex items-start overflow-hidden">
        <div
          className="mdlg:w-[25vw] lg:w-[15vw] h-[100%] p-2 px-4 fixed left-0 z-20 border-r hidden mdlg:flex flex-col justify-start 
        items-start bg-white overflow-hidden"
        >
          <Navigation />
        </div>

        <div className="mdlg:w-[75vw] lg:w-[85vw] m:ml-[20vw] mdlg:ml-[25vw] lg:ml-[15vw]">
          <div className="w-[100%] overflow-hidden">
            <div className="lg:hidden px-[20px]">
              <label
                className=" text-[1rem] cursor-pointer underline"
                onClick={showContents}
              >
                {text}
              </label>
              <div className="hidden overflow-hidden" id="toggleContents">
                <Navigation />
              </div>
            </div>
            <Content
              CompanyDetailsData={CompanyDetailsData}
              IpoDetailsData={IpoDetailsData}
              IpoTimetableData={IpoTimetableData}
              LotSizeData={LotSizeData}
              PerformanceData={PerformanceData}
              CompanyFinancialsData={CompanyFinancialData}
              SubscriptionsData={SubscriptionsData}
              DataPanelData={DataPanelData}
              AnchorDetailsData={AnchorDetailsData}
              IppoReservationData={IpoReservationData}
              PromoterHoldingsData={PromoterHoldingsData}
              ObjectIssueData={ObjectIssueData}
              CompanyContactData={CompanyContactData}
              RegistrarContactData={RegistrarContactData}
              DocumentsData={DocumentsData}
              ReviewData={ReviewData}
              GmpData={GmpData}
            />
          </div>
        </div>
      </div>
    </>
  )
}
