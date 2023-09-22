import React from 'react'
import CompanyDetails from './company-details'
import NameDivider from '@/components/Global/name-divider'
import IpoReservation from './tables/ipo-reservation'
import PromoterHoldings from './tables/promoter-holdings'
import ObjectIssue from './object-issue'
import GMP from './gmp'
import AnchorDetails from './tables/anchor-details'
import OurReview from './review'
import Discussion from './discussion'
import DataPanel from './data-panel'
import IpoDetails from './tables/ipo-details'
import IpoTimeTable from './tables/ipo-timetable'
import LotSize from './tables/lot-size'
import PerformanceIndicators from './tables/performance'
import CompanyFinancials from './company-financials'
import Subscriptions from './tables/subscriptions'
import Footer from '@/components/Footer/footer'

export default function Content() {
  return (
    <div className="w-[100vw] mdlg:w-[70vw] lg:w-[75vw] overflow-hidden mx-auto p-1 md:p-4 mb-[100px]">
      <CompanyDetails />
      <div className="lg:h-[300px] my-[20px]">
        <DataPanel />
        <div className="block lg:hidden">
          <NameDivider text="Ipo Details" width={0} />
          <IpoDetails />
          <NameDivider text="Ipo Timetable" width={0} />
          <IpoTimeTable />
          <NameDivider text="Lot Size" width={0} />
          <LotSize />
          <NameDivider text="Performnce Indicators" width={0} />
          <PerformanceIndicators />
          <NameDivider text="Company Financials" width={0} />
          <CompanyFinancials />
          <NameDivider text="Subscriptions" width={0} />
          <Subscriptions />
        </div>
      </div>
      <GMP />

      <div className="w-[100%] mb-[50px] mdlg:flex flex-wrap justify-around items-start">
        <div className="w-[100%] md:w-[50%]">
          <NameDivider text="Anchor Details" width={0} />
          <AnchorDetails />
        </div>
        <div className="w-[100%] md:w-[50%]">
          <NameDivider text="IPO Reservations" width={0} />
          <IpoReservation />
          <NameDivider text="Promoter Holdings" width={0} />
          <PromoterHoldings />
        </div>
      </div>
      <ObjectIssue />

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[300px]" id="companyContact">
          <label className="text-slate-400">Company Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">IPO Circle</label>
            <p>Address: UIET, PU, Chandigarh</p>
            <p>Phone: 7210479283</p>
            <p>Email: support@ipocircle.com</p>
            <p>Website: https://www.ipocircle.com</p>
          </div>
        </div>

        <div className="w-[300px]" id="registrarContact">
          <label className="text-slate-400">Registrar Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">Heera Dalal</label>
            <p>Address: UIET, PU, Chandigarh</p>
            <p>Phone: xxxxxxxxxx</p>
            <p>Email: support@dalaali.com</p>
            <p>Website: https://www.dalaali.com</p>
          </div>
        </div>

        <div className="w-[300px]" id="documents">
          <label className="text-slate-400">Documents</label>
          <div className="border p-2 underline h-[80px] lg:-[140px]">
            <a href="">RHP</a>
            <br />
            <a href="">DRHP</a>
          </div>
        </div>
      </div>

      <OurReview />
      {/* <Discussion /> */}
    </div>
  )
}
