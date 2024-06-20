'use client'
import { ReactNode, useState } from 'react'
import TopButton from './topButton'

export default function TableTopFilters(props: {
  setAll: () => void
  setMain: () => void
  setSme: () => void
  filterState: ReactNode
  handleNextButton: () => void
  handlePrevButton: () => void
  start: number
  end: number
  length: number
}) {
  const [filterState, setFilterState] = useState('Expand Filters')

  const expandFilters = () => {
    const filterPanel = document.getElementById('trackerFilters')
    if (filterPanel?.classList.contains('hidden')) {
      filterPanel?.classList.remove('hidden')
      setFilterState('Collapse Filters')
      return
    }

    filterPanel?.classList.add('hidden')
    setFilterState('Expand Filters')
  }

  return (
    <div className="mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center py-[10px] w-[100%] border-2">
      {/* All, Main and Sme IPOs filters */}
      <button
        onClick={() => {
          expandFilters()
        }}
        id="sme-ipo-tracker"
        className="text-primary w-[80%] lg:w-[auto] border-secondary cursor-pointer p-1 px-2 mx-2 font-semibold border-2"
      >
        {filterState}
      </button>

      {/* Displays current filter state */}
      <div className="border my-2 text-left lg:my-0 p-1 w-[80%] lg:w-[auto] text-gray-500 ">
        Current Filter:{' '}
        <label className="text-secondary font-bold ml-1">
          {props.filterState}
        </label>
      </div>
      <div className="">
        <TopButton text="All IPOs" function={props.setAll} />
        <TopButton text="Mainboard IPOs" function={props.setMain} />
        <TopButton text="SME IPOs" function={props.setSme} />
      </div>

      {/* Next and prev state of table */}
      <div className="">
        <TopButton text="Prev" function={props.handlePrevButton} />
        <label className="mx-2">
          ({props.start} - {props.end} / {props.length})
        </label>
        <TopButton text="Next" function={props.handleNextButton} />
      </div>
    </div>
  )
}
