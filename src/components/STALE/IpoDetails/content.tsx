import React from 'react'
import CompanyDetails from './company-details'
import NameDivider from '@/components/STALE/Global/name-divider'
import IpoReservation from './tables/ipo-reservation'
import PromoterHoldings from './tables/promoter-holdings'
import ObjectIssue from './object-issue'
import GMP from './gmp'
import AnchorDetails from './tables/anchor-details'
import OurReview from './review'
import DataPanel from './data-panel'
import IpoDetails from './tables/ipo-details'
import IpoTimeTable from './tables/ipo-timetable'
import LotSize from './tables/lot-size'
import PerformanceIndicators from './tables/performance'
import CompanyFinancials from './company-financials'
import Subscriptions from './tables/subscriptions'
import { ContentType } from '../../../app/ipo/data.types'

export default function Content(props: { data: ContentType }) {
  console.log(props.data)

  return (
    <div className="overflow-hidden mx-auto p-1 md:p-4 container">
      <div className="lg:h-[auto]">
        <DataPanel data={props.data} />

        <div className="block lg:hidden">
          <NameDivider text="Ipo Details" width={0} />
          <IpoDetails data={props.data.IpoDetailsData} />
          <NameDivider text="Ipo Timetable" width={0} />
          <IpoTimeTable data={props.data.IpoTimetableData} />
          <NameDivider text="Lot Size" width={0} />
          <LotSize data={props.data.LotSizeData} />
          <NameDivider text="Performnce Indicators" width={0} />
          <PerformanceIndicators data={props.data.PerformanceData} />
          <NameDivider text="Company Financials" width={0} />
          <CompanyFinancials data={props.data.CompanyFinancialsData} />
          <NameDivider text="Subscriptions" width={0} />
          <Subscriptions data={props.data.SubscriptionsData} />
          <NameDivider text="Anchor Details" width={0} />
          <AnchorDetails data={props.data.AnchorDetailsData} />
          <NameDivider text="IPO Reservations" width={0} />
          <IpoReservation data={props.data.IppoReservationData} />
          <NameDivider text="Promoter Holdings" width={0} />
          <PromoterHoldings data={props.data.PromoterHoldingsData} />
        </div>
      </div>

      {/* <GMP data={props.data.GmpData} /> */}

      <div className="lg:mt-[]">
        <ObjectIssue data={props.data.ObjectIssueData} />

        <div className="w-[100%] flex flex-wrap justify-around items-start">
          <div className="w-[350px]" id="companyContact">
            <label className="text-slate-400">Company Contact Details</label>
            <div className="border p-2 min-h-[150px] my-2">
              <label className="font-bold">
                {props.data.CompanyContactData.name}
              </label>
              <p>Address: {props.data.CompanyContactData.address}</p>
              <p>Phone: {props.data.CompanyContactData.phone}</p>
              <p>Email: {props.data.CompanyContactData.email}</p>
              <p>Website: {props.data.CompanyContactData.website}</p>
            </div>
          </div>

          <div className="w-[350px] overflow-clip" id="registrarContact">
            <label className="text-slate-400">Registrar Contact Details</label>
            <div className="border p-2 min-h-[150px] my-2">
              <label className="font-bold">
                {props.data.RegistrarContactData.name}
              </label>
              <p>Address: {props.data.RegistrarContactData.address}</p>
              <p>Phone: {props.data.RegistrarContactData.phone}</p>
              <p>Email: {props.data.RegistrarContactData.email}</p>
              <p>Website: {props.data.RegistrarContactData.website}</p>
            </div>
          </div>

          <div className="w-[350px]" id="documents">
            <label className="text-slate-400">Documents</label>
            <div className="border p-2 underline min-h-[150px] my-2">
              <a href={props.data.DocumentsData.rhp}>RHP</a>
              <br />
              <a href={props.data.DocumentsData.drhp}>DRHP</a>
            </div>
          </div>
        </div>

        <OurReview data={props.data.ReviewData} />
      </div>
    </div>
  )
}
