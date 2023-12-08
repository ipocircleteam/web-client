'use client'

import React, { useState } from 'react'
import RowTemplate from './row-template'
import TableHead from './table-head'
import GraphPanel from '../TrackerGraph/graph-panel'
import { TrackerDataType } from './table.types'

export default function TrackerTable(props: {
  darkMode: boolean
  trackerData: TrackerDataType[]
  setAll: () => void
  setMain: () => void
  setSme: () => void
  filterState: string
}) {
  const theme = props.darkMode ? 'text-[#FFFFFF]' : 'text-slate-600'
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(20)
  const viewData = props.trackerData.slice(start, end)

  const handlePrevButton = () => {
    if (start - 20 >= 0) {
      setStart(start - 20)
      setEnd(end - 20)
    } else {
      setStart(0)
      setEnd(20)
    }
  }

  const handleNextButton = () => {
    if (end + 20 <= props.trackerData.length) {
      setStart(start + 20)
      setEnd(end + 20)
    } else {
      setEnd(props.trackerData.length)
      setStart(props.trackerData.length - 20)
    }
  }

  const getTotalPrice = (
    type: 'listing_price' | 'current_price' | 'dayend_price' | 'issue_price',
  ) => {
    let sum = 0
    props.trackerData.forEach((element) => {
      sum = sum + element[type]
    })
    return sum
  }

  return (
    <>
      <div
        className={
          (props.darkMode ? 'bg-panelDark' : 'bg-white') +
          ' mx-auto w-[100%] lg:w-[95%] flex justify-start  lg:justify-center items-center flex-wrap h-[auto] rounded-lg p-1'
        }
      >
        <div className="mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center py-[10px] border-t border-b w-[100%]">
          <div className="my-2 lg:my-0">
            <button
              onClick={() => {
                props.setAll()
              }}
              id="all-ipo-tracker"
              className="text-primary cursor-pointer p-1 px-2 mx-2 rounded-lg shadow-md hover:border border-primary shadow-blue-200"
            >
              All IPOs
            </button>
            <button
              onClick={() => {
                props.setMain()
              }}
              id="main-ipo-tracker"
              className="text-primary cursor-pointer p-1 px-2 mx-2 rounded-lg shadow-md hover:border border-primary shadow-blue-200"
            >
              Mainboard IPOs
            </button>
            <button
              onClick={() => {
                props.setSme()
              }}
              id="sme-ipo-tracker"
              className="text-primary cursor-pointer p-1 px-2 mx-2 rounded-lg shadow-md hover:border border-primary shadow-blue-200"
            >
              SME IPOs
            </button>
          </div>

          <div className="my-2 lg:my-0">
            <button
              onClick={handlePrevButton}
              className="text-primary cursor-pointer border p-1 px-2"
            >
              Prev
            </button>
            <label className="mx-2">
              ({start} - {end} / {props.trackerData.length})
            </label>
            <button
              onClick={handleNextButton}
              className="text-primary cursor-pointer border p-1 px-2"
            >
              Next
            </button>
          </div>

          <div className="border-2 my-2 lg:my-0 text-primary p-1 w-[250px] font-bold border-primary rounded-md">
            Current Filter: {props.filterState}
          </div>
        </div>
        <table className="w-[100%] mx-auto">
          <TableHead darkMode={props.darkMode} />

          {viewData.map((item, index) => {
            return (
              <RowTemplate
                key={'row-' + index}
                data={item}
                index={index}
                darkMode={props.darkMode}
              />
            )
          })}
        </table>
      </div>
      {/* <GraphPanel
        darkMode
        data1={[
          { name: 'Listing', value: getTotalPrice('listing') },
          { name: 'Current', value: getTotalPrice('current') },
        ]}
      /> */}
    </>
  )
}
