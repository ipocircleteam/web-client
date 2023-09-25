'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import { ContentType } from '../data.types'

export default function IPODetailsPage() {
  const path = usePathname()
  const [text, setText] = useState('Show Contents')
  const showContents = () => {
    $('#toggleContents').toggleClass('hidden')
    setText(text === 'Show Contents' ? 'Hide Contents' : 'Show Contents')
  }

  const [loading, setLoading] = useState<boolean>(true)
  const [statusText, setStatus] = useState<string>('')

  const [content, setContent] = useState<ContentType>({
    CompanyDetailsData: CompanyDetailsData,
    IpoDetailsData: IpoDetailsData,
    IpoTimetableData: IpoTimetableData,
    LotSizeData: LotSizeData,
    PerformanceData: PerformanceData,
    CompanyFinancialsData: CompanyFinancialData,
    SubscriptionsData: SubscriptionsData,
    DataPanelData: DataPanelData,
    AnchorDetailsData: AnchorDetailsData,
    IppoReservationData: IpoReservationData,
    PromoterHoldingsData: PromoterHoldingsData,
    ObjectIssueData: ObjectIssueData,
    CompanyContactData: CompanyContactData,
    RegistrarContactData: RegistrarContactData,
    DocumentsData: DocumentsData,
    ReviewData: ReviewData,
    GmpData: GmpData,
  })

  useEffect(() => {
    const ipoId = path?.substring(5)
    axios
      .get(`https://api.ipocircle.com/api/v0/ipo/details?ids=${ipoId}`, {
        headers: {
          Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
        },
      })
      .then((response) => {
        setContent({
          CompanyDetailsData: {
            company_logo_url: response.data[0].logo_url || '',
            company_name: response.data[0].name,
            opening_date: response.data[0].opening_date,
            closing_date: response.data[0].closing_date,
            description: response.data[0].description || '',
          },
          IpoDetailsData: {
            ipo_date: response.data[0].ipo_date || '',
            face_value: response.data[0].facevalue || 0,
            price_band: response.data[0].priceband || 0,
            lot_size_retails: response.data[0].shares_in_lot || 0,
            total_size: response.data[0].total_issue || 0,
            fresh_issue: response.data[0].fresh_issue || 0,
            ofs: response.data[0].ofs || '',
            issue_type: response.data[0].issue_type || '',
            listing_at: response.data[0].listing_at || [],
          },
          IpoTimetableData: {
            open_date: response.data[0].opening_date,
            close_date: response.data[0].closing_date,
            allotment_date: response.data[0].allotment_date || '',
            initiation_of_refunds: response.data[0].initiation_of_refunds || '',
            credit_of: response.data[0].credit_of || '',
            listing_date: response.data[0].listing_date || '',
            cutoff: response.data[0].cut_off_mandate || '',
            time_upf: response.data[0].time_upf || '',
          },
          LotSizeData: {
            min_retail: response.data[0].min_retail || 0,
            max_retail: response.data[0].max_retail || 0,
            min_shni: response.data[0].min_shni || 0,
            max_shni: response.data[0].max_shni || 0,
            min_bhni: response.data[0].min_bhni || 0,
            max_bhni: response.data[0].max_bhni || 0,
          },
          PerformanceData: {
            market_cap: response.data[0].marketcap || 0,
            roe: response.data[0].roe || 0,
            roce: response.data[0].roce || 0,
            debt: response.data[0].debt || 0,
            eps: response.data[0].eps || 0,
            ronw: response.data[0].ronw || 0,
          },
          CompanyFinancialsData: {
            period1: {
              date: response.data[0].period || '',
              assets: response.data[0].assets || 0,
              revenue: response.data[0].revenue || 0,
              profits_after_tax: response.data[0].profit_after_tax || 0,
              networth: response.data[0].net_worth || 0,
              reserves_and_surplus: response.data[0].reserves || 0,
              total_borrowings: response.data[0].borrowing || 0,
            },
            period2: {
              date: response.data[0].period || '',
              assets: response.data[0].assets || 0,
              revenue: response.data[0].revenue || 0,
              profits_after_tax: response.data[0].profit_after_tax || 0,
              networth: response.data[0].net_worth || 0,
              reserves_and_surplus: response.data[0].reserves || 0,
              total_borrowings: response.data[0].borrowing || 0,
            },
            period3: {
              date: response.data[0].period || '',
              assets: response.data[0].assets || 0,
              revenue: response.data[0].revenue || 0,
              profits_after_tax: response.data[0].profit_after_tax || 0,
              networth: response.data[0].net_worth || 0,
              reserves_and_surplus: response.data[0].reserves || 0,
              total_borrowings: response.data[0].borrowing || 0,
            },
            period4: {
              date: response.data[0].period || '',
              assets: response.data[0].assets || 0,
              revenue: response.data[0].revenue || 0,
              profits_after_tax: response.data[0].profit_after_tax || 0,
              networth: response.data[0].net_worth || 0,
              reserves_and_surplus: response.data[0].reserves || 0,
              total_borrowings: response.data[0].borrowing || 0,
            },
            period5: {
              date: response.data[0].period || '',
              assets: response.data[0].assets || 0,
              revenue: response.data[0].revenue || 0,
              profits_after_tax: response.data[0].profit_after_tax || 0,
              networth: response.data[0].net_worth || 0,
              reserves_and_surplus: response.data[0].reserves || 0,
              total_borrowings: response.data[0].borrowing || 0,
            },
          },
          SubscriptionsData: {
            qib: response.data[0].qib || '',
            nii_snii: response.data[0].nii_snii || 0,
            nii_bnii: response.data[0].nii_bnii || 0,
            retail: response.data[0].retail || 0,
          },
          DataPanelData: {
            IpoDetailsData: {
              ipo_date: response.data[0].ipo_date || '',
              face_value: response.data[0].facevalue || 0,
              price_band: response.data[0].priceband || 0,
              lot_size_retails: response.data[0].shares_in_lot || 0,
              total_size: response.data[0].total_issue || 0,
              fresh_issue: response.data[0].fresh_issue || 0,
              ofs: response.data[0].ofs || '',
              issue_type: response.data[0].issue_type || '',
              listing_at: response.data[0].listing_at || [],
            },
            IpoTimetableData: {
              open_date: response.data[0].opening_date,
              close_date: response.data[0].closing_date,
              allotment_date: response.data[0].allotment_date || '',
              initiation_of_refunds:
                response.data[0].initiation_of_refunds || '',
              credit_of: response.data[0].credit_of || '',
              listing_date: response.data[0].listing_date || '',
              cutoff: response.data[0].cut_off || '',
              time_upf: response.data[0].time_upf || '',
            },
            LotSizeData: {
              min_retail: response.data[0].min_retail || 0,
              max_retail: response.data[0].max_retail || 0,
              min_shni: response.data[0].min_shni || 0,
              max_shni: response.data[0].max_shni || 0,
              min_bhni: response.data[0].min_bhni || 0,
              max_bhni: response.data[0].max_bhni || 0,
            },
            PerformanceData: {
              market_cap: response.data[0].marketcap || 0,
              roe: response.data[0].roe || 0,
              roce: response.data[0].roce || 0,
              debt: response.data[0].debt || 0,
              eps: response.data[0].eps || 0,
              ronw: response.data[0].ronw || 0,
            },
            CompanyFinancialsData: {
              period1: {
                date: response.data[0].period || '',
                assets: response.data[0].assets || 0,
                revenue: response.data[0].revenue || 0,
                profits_after_tax: response.data[0].profit_after_tax || 0,
                networth: response.data[0].net_worth || 0,
                reserves_and_surplus: response.data[0].reserves || 0,
                total_borrowings: response.data[0].borrowing || 0,
              },
              period2: {
                date: response.data[0].period || '',
                assets: response.data[0].assets || 0,
                revenue: response.data[0].revenue || 0,
                profits_after_tax: response.data[0].profit_after_tax || 0,
                networth: response.data[0].net_worth || 0,
                reserves_and_surplus: response.data[0].reserves || 0,
                total_borrowings: response.data[0].borrowing || 0,
              },
              period3: {
                date: response.data[0].period || '',
                assets: response.data[0].assets || 0,
                revenue: response.data[0].revenue || 0,
                profits_after_tax: response.data[0].profit_after_tax || 0,
                networth: response.data[0].net_worth || 0,
                reserves_and_surplus: response.data[0].reserves || 0,
                total_borrowings: response.data[0].borrowing || 0,
              },
              period4: {
                date: response.data[0].period || '',
                assets: response.data[0].assets || 0,
                revenue: response.data[0].revenue || 0,
                profits_after_tax: response.data[0].profit_after_tax || 0,
                networth: response.data[0].net_worth || 0,
                reserves_and_surplus: response.data[0].reserves || 0,
                total_borrowings: response.data[0].borrowing || 0,
              },
              period5: {
                date: response.data[0].period || '',
                assets: response.data[0].assets || 0,
                revenue: response.data[0].revenue || 0,
                profits_after_tax: response.data[0].profit_after_tax || 0,
                networth: response.data[0].net_worth || 0,
                reserves_and_surplus: response.data[0].reserves || 0,
                total_borrowings: response.data[0].borrowing || 0,
              },
            },
            SubscriptionsData: {
              qib: response.data[0].qib || '',
              nii_snii: response.data[0].nii_snii || 0,
              nii_bnii: response.data[0].nii_bnii || 0,
              retail: response.data[0].retail || 0,
            },
          },
          AnchorDetailsData: {
            bid_date: response.data[0].anchor_bid_date || '',
            shares_offerred: response.data[0].anchor_shares_offerres || 0,
            portion_size: response.data[0].portion || 0,
            anchorLockIn_50per_30days: response.data[0].anchor_lockinhalf || 0,
            anchorLockIn_50per_90days: response.data[0].anchor_locknrest || 0,
          },
          IppoReservationData: {
            qib_shares_offerred: 0,
            nil_shares_offerred: 0,
            retail_shares_offerred: 0,
          },
          PromoterHoldingsData: {
            preissue_share_holdings:
              response.data[0].promoter_holdings_preissue || 0,
            postissue_share_holdings:
              response.data[0].promoter_holdings_postissue || 0,
          },
          ObjectIssueData: {
            text: '',
          },
          CompanyContactData: {
            name: response.data[0].name || '',
            address: response.data[0].company_address || '',
            phone: response.data[0].company_phone || '',
            email: response.data[0].company_email || '',
            website: response.data[0].company_website || '',
          },
          RegistrarContactData: {
            name: response.data[0].registrar_name || '',
            address: response.data[0].registrar_address || '',
            phone: response.data[0].registrar_phone || '',
            email: response.data[0].registrar_email || '',
            website: response.data[0].registrar_website || '',
          },
          DocumentsData: {
            rhp: response.data[0].rhp || '',
            drhp: response.data[0].drhp || '',
          },
          ReviewData: {
            review: '',
          },
          GmpData: [
            {
              instant: 'T1',
              gmp: 2400,
            },
            {
              instant: 'T2',
              gmp: 1398,
            },
            {
              instant: 'T3',
              gmp: 9800,
            },
          ],
        })
        // console.log(response.data)

        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setStatus('Error Fetching Data')
      })
  }, [])

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
            <p className="text-secondary text-center text-[18px] mt-[30px] font-bold">
              {loading ? 'Loading Data ...' : ''}
            </p>
            <p className="text-primary text-center font-bold text-[1rem]">
              {statusText}
            </p>
            <Content data={content} />
          </div>
        </div>
      </div>
    </>
  )
}
