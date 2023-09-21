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
import OurReview from './review'
import Discussion from './discussion'
import DataPanel from './data-panel'

export default function Content() {
  return (
    <div className="w-[100%] md:w-[90%] mx-auto p-2 mb-[100px]">
      <CompanyDetails />
      <div className="h-[300px]">
        <DataPanel />
      </div>
      <GMP />

      <div className="w-[100%] mdlg:flex flex-wrap justify-around items-start">
        <div className="w-[50%]">
          <NameDivider text="Anchor Details" width={70} />
          <AnchorDetails />
        </div>
        <div className="w-[50%]">
          <NameDivider text="IPO Reservations" width={70} />
          <IpoReservation />
          <NameDivider text="Promoter Holdings" width={50} />
          <PromoterHoldings />
        </div>
      </div>
      <ObjectIssue />

      <hr className="my-[20px]" />

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[30%]" id="companyContact">
          <label className="text-slate-400">Company Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">IPO Circle</label>
            <p>Address: UIET, PU, Chandigarh</p>
            <p>Phone: 7210479283</p>
            <p>Email: support@ipocircle.com</p>
            <p>Website: https://www.ipocircle.com</p>
          </div>
        </div>

        <div className="w-[30%]">
          <label className="text-slate-400">Registrar Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">Heera Dalal</label>
            <p>Address: UIET, PU, Chandigarh</p>
            <p>Phone: xxxxxxxxxx</p>
            <p>Email: support@dalaali.com</p>
            <p>Website: https://www.dalaali.com</p>
          </div>
        </div>

        <div className="w-[30%]">
          <label className="text-slate-400">Documents</label>
          <div className="border p-2 underline h-[140px]">
            <a href="">RHP</a>
            <br />
            <a href="">DRHP</a>
          </div>
        </div>
      </div>

      <OurReview />
      <Discussion />
    </div>
  )
}
