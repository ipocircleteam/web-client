import React from 'react'
import CompanyDetails from './company-details'
import NameDivider from '@/components/Global/name-divider'
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
import Footer from '@/components/Footer/footer'
import {
  AnchorDetailsType,
  CompanyDetailsType,
  CompanyFinancialsType,
  Company_RegistrarContactType,
  DataPanelType,
  DocumentsDataType,
  GmpDataType,
  IpoDetailsType,
  IpoReservationType,
  IpoTimetableType,
  LotSizeType,
  ObjectIssueType,
  PerformanceIndicatorsType,
  PromoterHoldingsType,
  ReviewType,
  SubscriptionsType,
} from '../data.types'

export default function Content(props: {
  CompanyDetailsData: CompanyDetailsType
  IpoDetailsData: IpoDetailsType
  IpoTimetableData: IpoTimetableType
  LotSizeData: LotSizeType
  PerformanceData: PerformanceIndicatorsType
  CompanyFinancialsData: CompanyFinancialsType
  SubscriptionsData: SubscriptionsType
  DataPanelData: DataPanelType
  AnchorDetailsData: AnchorDetailsType
  IppoReservationData: IpoReservationType
  PromoterHoldingsData: PromoterHoldingsType
  ObjectIssueData: ObjectIssueType
  CompanyContactData: Company_RegistrarContactType
  RegistrarContactData: Company_RegistrarContactType
  DocumentsData: DocumentsDataType
  ReviewData: ReviewType
  GmpData: GmpDataType[]
}) {
  return (
    <div className="w-[100vw] mdlg:w-[70vw] lg:w-[75vw] overflow-hidden mx-auto p-1 md:p-4 mb-[100px]">
      <CompanyDetails data={props.CompanyDetailsData} />
      <div className="lg:h-[300px] my-[20px]">
        <DataPanel data={props.DataPanelData} />
        <div className="block lg:hidden">
          <NameDivider text="Ipo Details" width={0} />
          <IpoDetails data={props.IpoDetailsData} />
          <NameDivider text="Ipo Timetable" width={0} />
          <IpoTimeTable data={props.IpoTimetableData} />
          <NameDivider text="Lot Size" width={0} />
          <LotSize data={props.LotSizeData} />
          <NameDivider text="Performnce Indicators" width={0} />
          <PerformanceIndicators data={props.PerformanceData} />
          <NameDivider text="Company Financials" width={0} />
          <CompanyFinancials data={props.CompanyFinancialsData} />
          <NameDivider text="Subscriptions" width={0} />
          <Subscriptions data={props.SubscriptionsData} />
        </div>
      </div>
      <GMP data={props.GmpData} />

      <div className="w-[100%] mb-[50px] mdlg:flex flex-wrap justify-around items-start">
        <div className="w-[100%] md:w-[50%]">
          <NameDivider text="Anchor Details" width={0} />
          <AnchorDetails data={props.AnchorDetailsData} />
        </div>
        <div className="w-[100%] md:w-[50%]">
          <NameDivider text="IPO Reservations" width={0} />
          <IpoReservation data={props.IppoReservationData} />
          <NameDivider text="Promoter Holdings" width={0} />
          <PromoterHoldings data={props.PromoterHoldingsData} />
        </div>
      </div>
      <ObjectIssue data={props.ObjectIssueData} />

      <div className="w-[100%] flex flex-wrap justify-around items-start">
        <div className="w-[300px]" id="companyContact">
          <label className="text-slate-400">Company Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">{props.CompanyContactData.name}</label>
            <p>Address: {props.CompanyContactData.address}</p>
            <p>Phone: {props.CompanyContactData.phone}</p>
            <p>Email: {props.CompanyContactData.email}</p>
            <p>Website: {props.CompanyContactData.website}</p>
          </div>
        </div>

        <div className="w-[300px]" id="registrarContact">
          <label className="text-slate-400">Registrar Contact Details</label>
          <div className="border p-2 h-[140px]">
            <label className="font-bold">
              {props.RegistrarContactData.name}
            </label>
            <p>Address: {props.RegistrarContactData.address}</p>
            <p>Phone: {props.RegistrarContactData.phone}</p>
            <p>Email: {props.RegistrarContactData.email}</p>
            <p>Website: {props.RegistrarContactData.website}</p>
          </div>
        </div>

        <div className="w-[300px]" id="documents">
          <label className="text-slate-400">Documents</label>
          <div className="border p-2 underline h-[80px] lg:-[140px]">
            <a href={props.DocumentsData.rhp}>RHP</a>
            <br />
            <a href={props.DocumentsData.drhp}>DRHP</a>
          </div>
        </div>
      </div>

      <OurReview data={props.ReviewData} />
    </div>
  )
}
