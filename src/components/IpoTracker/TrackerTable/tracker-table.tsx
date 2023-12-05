'use client'

import React, { useState } from 'react'
import RowTemplate from './row-template'
import TableHead from './table-head'
import GraphPanel from '../TrackerGraph/graph-panel'
import { TrackerDataType } from './table.types'

export default function TrackerTable(props: {
  darkMode: boolean
  trackerData: TrackerDataType[]
}) {
  const theme = props.darkMode ? 'text-[#FFFFFF]' : 'text-slate-600'
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(30)
  const viewData = props.trackerData.slice(start, end)

  const handlePrevButton = () => {
    if (start - 10 >= 0) {
      setStart(start - 10)
      setEnd(end - 10)
    } else {
      setStart(0)
      setEnd(10)
    }
  }

  const handleNextButton = () => {
    if (end + 10 <= props.trackerData.length) {
      setStart(start + 10)
      setEnd(end + 10)
    } else {
      setEnd(props.trackerData.length)
      setStart(props.trackerData.length - 10)
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
          ' mx-auto w-[100%] lg:w-[95%] flex justify-start lg:justify-center items-center flex-wrap h-[auto] rounded-lg p-1'
        }
      >
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

          {/* <div className="mx-auto flex justify-start lg:justify-center my-[20px]">
            <button
              onClick={handlePrevButton}
              className="text-primary cursor-pointer underline"
            >
              Prev
            </button>
            <label className="mx-2">
              ({start} - {end} / {props.trackerData.length})
            </label>
            <button
              onClick={handleNextButton}
              className="text-primary cursor-pointer underline"
            >
              Next
            </button>
          </div> */}
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
