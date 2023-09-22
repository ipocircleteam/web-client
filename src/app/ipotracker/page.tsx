'use client'
import TrackerDetails from '@/components/IpoTracker/TrackerDetails/tracker-details'
import GraphPanel from '@/components/IpoTracker/TrackerGraph/graph-panel'
import TrackerMenu from '@/components/IpoTracker/TrackerMenu/tracker-menu'
import TrackerTable from '@/components/IpoTracker/TrackerTable/tracker-table'
import Filter from '@/components/IpoTracker/TrackerFilter/filter'
import $ from 'jquery'
import React, { useState } from 'react'
import Menu from '@/components/Menu/menu'

export default function IpoTracker() {
  const [isDark, setIsDark] = useState(false)

  const toggleMode = () => {
    setIsDark(!isDark)
  }

  const toggleFilters = () => {
    $('#filter').toggleClass('hidden')
  }

  return (
    <>
      <Filter />
      <Menu />
      <div
        className={
          (isDark ? 'bg-[#0c1a3b]' : 'bg-white') +
          ' min-h-[100vh] overflow-hidden mt-[50px]'
        }
      >
        <TrackerMenu darkMode={isDark} toggleMode={toggleMode} />
        <div className="flex justify-around items-start flex-wrap mx-[auto] w-[95vw]">
          <section className="w-[75vw] md:w-[70vw] overflow-hidden">
            <TrackerDetails darkMode={isDark} toggleFilters={toggleFilters} />
            <TrackerTable darkMode={isDark} />
          </section>
          <section className="w-[20vw] overflow-hidden">
            <GraphPanel darkMode={isDark} />
          </section>
        </div>
      </div>
    </>
  )
}
