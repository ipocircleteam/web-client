'use client'
import TrackerDetails from '@/components/IpoTracker/TrackerDetails/tracker-details'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import TrackerTable from '@/components/IpoTracker/TrackerTable/tracker-table'
import $ from 'jquery'
import React, { useState, useEffect } from 'react'
import { TrackerDataType } from '@/components/IpoTracker/TrackerTable/table.types'

export default function WebApp(props: {
  data: TrackerDataType[]
  main: TrackerDataType[]
  sme: TrackerDataType[]
}) {
  const [isDark, setIsDark] = useState(false)
  const [tableData, setTableData] = useState(props.main)
  const [refData, setRefData] = useState(props.data)
  const trackerData: TrackerDataType[] = props.main
  const [query, setQuery] = useState('')
  const [refMainData, setRefMainData] = useState(props.main)
  const [refSmeData, setRefSmeData] = useState(props.sme)
  const [filterState, setFilterState] = useState('Main IPOs')

  useEffect(() => {
    searchCompany()
  }, [query])

  const toggleMode = () => {
    setIsDark(!isDark)
  }

  const toggleFilters = () => {
    $('#filter').toggleClass('hidden')
  }

  const getFilteredData = async (
    sector: string,
    year: number,
    price: number,
  ) => {
    if (String(sector) === 'All' && Number(price) === 0) {
      return trackerData
    } else {
      const filteredData = trackerData.filter((item) => {
        // Check conditions based on the arguments
        let sectorCondition = true
        let listingCondition = true
        let yearCondition = true

        if (String(sector) !== 'All' && String(sector) !== undefined) {
          sectorCondition = item.sector === String(sector)
        }

        if (Number(price) !== 0 && Number(price) !== undefined) {
          listingCondition = item.listing_price === Number(price)
        }

        if (Number(year) !== 0 && Number(price) !== undefined) {
          yearCondition = item.year === Number(year)
        }

        return sectorCondition && listingCondition && yearCondition
      })
      return filteredData
    }
  }

  const getComparedData = (
    filterData: TrackerDataType[],
    req_listing_gain: number,
  ) => {
    const comparedData = filterData.filter((item) => {
      const item_listing_gain =
        ((item.listing_price - item.current_price) / item.issue_price) * 100
      return item_listing_gain >= req_listing_gain
    })
    return comparedData
  }

  const filter = async (
    sector: string,
    year: number,
    listing_gain: number,
    p1: String,
    p2: String,
    op: String,
  ) => {
    if (
      String(sector) === 'All' &&
      Number(year) === 0 &&
      Number(listing_gain) === 0
    ) {
      setFilterState('Main IPOs')
      setTableData(refMainData)
    } else {
      const comparedData = trackerData.filter((item) => {
        const listingGainCal =
          ((item.listing_price - item.issue_price) / item.issue_price) * 100
        if (sector === 'All') {
          return listingGainCal >= listing_gain
        } else {
          return listingGainCal >= listing_gain && item.sector === sector
        }
      })
      setTableData(comparedData)
    }
  }

  const setMain = () => {
    setFilterState('Main IPOs')
    setTableData(refMainData)
  }

  const setSme = () => {
    setFilterState('SME IPOs')
    setTableData(refSmeData)
  }

  const setAll = () => {
    setFilterState('All IPOs')
    setTableData(refData)
  }

  const searchCompany = () => {
    const filteredData = trackerData.filter((item) => {
      const name = item.company_name?.toLowerCase()
      const qName = query?.toLowerCase()
      return name?.includes(qName)
    })

    if (query.length === 0) {
      setFilterState('Main IPOs')
    }
    setTableData(filteredData)
  }

  const positiveListing = async () => {
    const pData = await refData.filter((item) => {
      if (item.listing_price !== null || item.issue_price !== null) {
        return Number(item.listing_price) >= Number(item.issue_price)
      }
    })
    setFilterState('Positive Lisitng')
    setTableData(pData)
  }

  const negativeListing = async () => {
    setFilterState('Negative Lisitng')
    const nData = refData.filter((item) => {
      if (item.listing_price !== null || item.issue_price !== null) {
        return Number(item.listing_price) < Number(item.issue_price)
      }
    })
    setTableData(nData)
  }

  const cpGreaterthanIp = async () => {
    setFilterState('CP > IP')
    const fData = refData.filter((item) => {
      if (item.current_price !== null || item.issue_price !== null)
        return item.current_price >= item.issue_price
    })
    setTableData(fData)
  }

  const cpLesserthanIp = async () => {
    setFilterState('CP < IP')
    const fData = refData.filter((item) => {
      if (item.current_price !== null || item.issue_price !== null)
        return item.current_price < item.issue_price
    })
    setTableData(fData)
  }

  const cpGreaterthanLp = async () => {
    setFilterState('CP > LP')
    const fData = refData.filter((item) => {
      if (item.listing_price !== null || item.current_price !== null)
        return item.current_price >= item.listing_price
    })
    setTableData(fData)
  }

  const cpLesserthanLp = async () => {
    setFilterState('CP < LP')
    const fData = refData.filter((item) => {
      if (item.listing_price !== null || item.current_price !== null)
        return item.current_price < item.listing_price
    })
    setTableData(fData)
  }

  return (
    <div
      className={
        (isDark ? 'bg-[#0c1a3b]' : 'bg-white') +
        ' overflow-hidden container mx-auto max-w-9xl w-[100vw]'
      }
    >
      <TrackerMenu darkMode={isDark} toggleMode={toggleMode} />
      <section className="w-[100%] md:w-[95%] mx-auto overflow-hidden block lg:hidden">
        <TrackerDetails
          darkMode={isDark}
          toggleFilters={toggleFilters}
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

      <div className="flex justify-around items-start flex-wrap mx-[auto] w-[100%] md:w-[95%]">
        <section className="w-[100%] lg:w-[65%] overflow-y-hidden overflow-x-hidden">
          <TrackerTable
            darkMode={isDark}
            trackerData={tableData}
            setAll={setAll}
            setMain={setMain}
            setSme={setSme}
            filterState={filterState}
          />
        </section>

        <section className="w-[30%] overflow-hidden hidden lg:block">
          <TrackerDetails
            darkMode={isDark}
            toggleFilters={toggleFilters}
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
      </div>
    </div>
  )
}
