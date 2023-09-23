'use client'
import TrackerDetails from '@/components/IpoTracker/TrackerDetails/tracker-details'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import TrackerTable from '@/components/IpoTracker/TrackerTable/tracker-table'
import $ from 'jquery'
import React, { useState } from 'react'
import Menu from '@/components/Menu/menu'
import { trackerData } from '@/dummydata'
import Footer from '@/components/Footer/footer'
import { TrackerDataType } from '@/components/IpoTracker/TrackerTable/table.types'

export default function IpoTracker() {
  const [isDark, setIsDark] = useState(false)
  const [tableData, setTableData] = useState(trackerData)

  const toggleMode = () => {
    setIsDark(!isDark)
  }

  const toggleFilters = () => {
    $('#filter').toggleClass('hidden')
  }

  function scrollToDiv(targetId: string) {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 50

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID "${targetId}" not found.`)
    }
  }

  const accessPriceType = (
    name: String,
  ): 'listing' | 'current' | 'dayend' | 'issue' => {
    if (name === 'Listing Price') return 'listing'
    else if (name === 'Current Price') return 'current'
    else if (name === 'Dayend Price') return 'dayend'
    else name === 'Issue Price'
    return 'issue'
  }

  const getFilteredData = async (
    sector: string,
    year: number,
    price: number,
  ) => {
    if (String(sector) === 'All' && Number(year) === 0 && Number(price) === 0) {
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
          listingCondition = item.listing === Number(price)
        }

        if (Number(year) !== 0 && Number(price) !== undefined) {
          yearCondition = item.year === Number(year)
        }

        return sectorCondition && listingCondition && yearCondition
      })
      return filteredData
    }
  }

  const getComparedData = async (
    filteredData: TrackerDataType[],
    p1: String,
    p2: String,
    op: String,
  ) => {
    if (
      String(p1) === 'Select parameter 1' ||
      String(p2) === 'Select parameter 2' ||
      String(op) === 'Select comparator'
    ) {
      return filteredData
    } else {
      const compareData = filteredData.filter((item) => {
        let compareCondition = true

        let param1: 'listing' | 'current' | 'dayend' | 'issue' =
          accessPriceType(p1)
        let param2: 'listing' | 'current' | 'dayend' | 'issue' =
          accessPriceType(p2)
        console.log(Number(item[param1]) + ',' + Number(item[param2]))

        if (op === 'More than') {
          compareCondition = Number(item[param1]) > Number(item[param2])
        }

        if (op === 'Less than') {
          compareCondition = Number(item[param1]) < Number(item[param2])
        }

        if (op === 'Same as') {
          compareCondition = Number(item[param1]) === Number(item[param2])
        }

        return compareCondition
      })

      return compareData
    }
  }

  const filter = async (
    sector: string,
    year: number,
    price: number,
    p1: String,
    p2: String,
    op: String,
  ) => {
    const filterData = await getFilteredData(sector, year, price)

    const comparedData = await getComparedData(filterData, p1, p2, op)

    setTableData(comparedData)
  }

  const searchCompany = (name: string) => {
    const filteredData = trackerData.filter((item) => {
      return item.company.includes(String(name))
    })

    setTableData(filteredData)
  }

  return (
    <>
      <Menu />
      <div
        className={
          (isDark ? 'bg-[#0c1a3b]' : 'bg-white') +
          ' min-h-[100vh] overflow-hidden mt-[50px]'
        }
      >
        <div className="bg-primary p-3 text-white h-[400px] flex justify-center items-center">
          <span className="text-center">
            <h1 className="font-bold text-[2.5rem] md:text-[3rem]">
              IPO Tracker
            </h1>
            <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
              This is the small description about IPO Tracker
            </p>
            <span>
              <button
                onClick={() => {
                  scrollToDiv('trackerGuide')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                How it works?
              </button>
              <button
                onClick={() => {
                  scrollToDiv('tracker')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                Let&apos;s go
              </button>
            </span>
          </span>
        </div>
        <TrackerMenu darkMode={isDark} toggleMode={toggleMode} />
        <section className="w-[100vw] md:w-[95vw] mx-auto overflow-hidden block lg:hidden">
          <TrackerDetails
            darkMode={isDark}
            toggleFilters={toggleFilters}
            filter={filter}
            search={searchCompany}
          />
        </section>
        <div className="flex justify-around items-start flex-wrap mx-[auto] w-[100vw] md:w-[95vw]">
          <section className="w-[100vw] lg:w-[65vw] overflow-y-hidden overflow-x-scroll">
            <TrackerTable darkMode={isDark} trackerData={tableData} />
          </section>
          <section className="w-[30vw] overflow-hidden hidden lg:block">
            <TrackerDetails
              darkMode={isDark}
              toggleFilters={toggleFilters}
              filter={filter}
              search={searchCompany}
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
