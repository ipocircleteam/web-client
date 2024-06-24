'use client'
// import TrackerDetails from '@/components/IpoTracker/TrackerDetails'
// import TrackerTable from '@/components/IpoTracker/TrackerTable'
import $ from 'jquery'
import React, { useState, useEffect } from 'react'
// import { TrackerDataType } from '../../types/ipoTracker'

export default function WebApp(props: {
  // data: TrackerDataType[]
  // main: TrackerDataType[]
  // sme: TrackerDataType[]
}) {
  // const [tableData, setTableData] = useState(props.main)
  // const [refData, setRefData] = useState(props.data)

  // const trackerData: TrackerDataType[] = props.main
  // const [query, setQuery] = useState('')
  // const [refMainData, setRefMainData] = useState(props.main)
  // const [refSmeData, setRefSmeData] = useState(props.sme)
  // const [filterState, setFilterState] = useState('Main IPOs')

  // const searchCompany = () => {
  //   const filteredData = trackerData.filter((item) => {
  //     const name = item.company_name?.toLowerCase()
  //     const qName = query?.toLowerCase()
  //     return name?.includes(qName)
  //   })

  //   if (query.length === 0) {
  //     setFilterState('Main IPOs')
  //   }
  //   setTableData(filteredData)
  // }

  // useEffect(() => {
  //   searchCompany()
  // }, [query])

  // // applies filter
  // const filter = async (sector: string, year: number, listing_gain: number) => {
  //   if (
  //     String(sector) === 'All' &&
  //     Number(year) === 0 &&
  //     Number(listing_gain) === 0
  //   ) {
  //     setFilterState('Main IPOs')
  //     setTableData(refMainData)
  //   } else {
  //     const comparedData = trackerData.filter((item) => {
  //       const listingGainCal =
  //         ((item.listing_price - item.issue_price) / item.issue_price) * 100
  //       if (sector === 'All') {
  //         return listingGainCal >= listing_gain
  //       } else {
  //         return listingGainCal >= listing_gain && item.sector === sector
  //       }
  //     })

  //     setTableData(comparedData)
  //   }
  // }

  // const setMain = () => {
  //   setFilterState('Main IPOs')
  //   setTableData(refMainData)
  // }

  // const setSme = () => {
  //   setFilterState('SME IPOs')
  //   setTableData(refSmeData)
  // }

  // const setAll = () => {
  //   setFilterState('All IPOs')
  //   setTableData(refData)
  // }

  // const positiveListing = async () => {
  //   const pData = await refData.filter((item) => {
  //     if (item.listing_price !== null || item.issue_price !== null) {
  //       return Number(item.listing_price) >= Number(item.issue_price)
  //     }
  //   })
  //   setTableData(pData)
  //   setFilterState('Positive Lisitng')
  // }

  // const negativeListing = async () => {
  //   const nData = refData.filter((item) => {
  //     if (item.listing_price !== null || item.issue_price !== null) {
  //       return Number(item.listing_price) < Number(item.issue_price)
  //     }
  //   })
  //   setTableData(nData)
  //   setFilterState('Negative Lisitng')
  // }

  // // finds IPOs with current price greater than issue price
  // const cpGreaterthanIp = async () => {
  //   setFilterState('CP > IP')
  //   const fData = refData.filter((item) => {
  //     if (item.current_price !== null || item.issue_price !== null)
  //       return item.current_price >= item.issue_price
  //   })
  //   setTableData(fData)
  // }

  // // finds IPOs with current price lesser than issue price
  // const cpLesserthanIp = async () => {
  //   setFilterState('CP < IP')
  //   const fData = refData.filter((item) => {
  //     if (item.current_price !== null || item.issue_price !== null)
  //       return item.current_price < item.issue_price
  //   })
  //   setTableData(fData)
  // }

  // // finds IPOs with current price greater than listing price
  // const cpGreaterthanLp = async () => {
  //   setFilterState('CP > LP')
  //   const fData = refData.filter((item) => {
  //     if (item.listing_price !== null || item.current_price !== null)
  //       return item.current_price >= item.listing_price
  //   })
  //   setTableData(fData)
  // }

  // // finds IPOs with current price lesser than listing price
  // const cpLesserthanLp = async () => {
  //   setFilterState('CP < LP')
  //   const fData = refData.filter((item) => {
  //     if (item.listing_price !== null || item.current_price !== null)
  //       return item.current_price < item.listing_price
  //   })
  //   setTableData(fData)
  // }

  return (
    <div className={' overflow-hidden container mx-auto max-w-9xl w-[100vw]'}>
      {/* <section className="w-[100%] lg:w-[80%] mx-auto overflow-y-hidden overflow-x-hidden">
        <TrackerTable
          trackerData={tableData}
          setAll={setAll}
          setMain={setMain}
          setSme={setSme}
          filterState={filterState}
        >
          <section className="w-[100%] mx-auto overflow-hidden block">
            <TrackerDetails
              filter={filter}
              search={searchCompany}
              query={query}
              setQuery={(q: string) => {
                setQuery(q)
              }}
              trackerData={tableData}
              positiveListing={positiveListing}
              negativeListing={negativeListing}
              cpGreaterthanIp={cpGreaterthanIp}
              cpLesserthanIp={cpLesserthanIp}
              cpGreaterthanLp={cpGreaterthanLp}
              cpLesserthanLp={cpLesserthanLp}
            />
          </section>
        </TrackerTable>
      </section> */}
    </div>
  )
}
