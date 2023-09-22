'use client'
import TrackerDetails from '@/components/IpoTracker/TrackerDetails/tracker-details'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import TrackerTable from '@/components/IpoTracker/TrackerTable/tracker-table'
import $ from 'jquery'
import React, { useState } from 'react'
import Menu from '@/components/Menu/menu'
import { trackerData } from '@/dummydata'

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

  const filter = async (sector: string, year: number, price: number) => {
    console.log(sector + ',' + year + ',' + price)

    if (sector === 'All' && year === 0 && price === 0) {
      setTableData(trackerData)
      return
    }

    const filteredData = trackerData.filter((item) => {
      // Check conditions based on the arguments
      let sectorCondition = false
      let listingCondition = false
      let yearCondition = false

      if (sector !== 'All' && sector !== undefined) {
        sectorCondition = item.sector === String(sector)
      }

      if (price !== 0 && price !== undefined) {
        listingCondition = item.listing === Number(price)
      }

      if (year !== 0 && price !== undefined) {
        yearCondition = item.year === Number(year)
      }

      return sectorCondition && listingCondition && yearCondition
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
            />
          </section>
        </div>
      </div>
    </>
  )
}
