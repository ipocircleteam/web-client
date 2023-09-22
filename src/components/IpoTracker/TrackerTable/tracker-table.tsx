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
  const [end, setEnd] = useState(15)
  const viewData = props.trackerData.slice(start, end)

  const handlePrevButton = () => {
    if (start - 15 >= 0) {
      setStart(start - 15)
      setEnd(end - 15)
    } else {
      setStart(0)
      setEnd(15)
    }
  }

  const handleNextButton = () => {
    if (end + 15 <= props.trackerData.length) {
      setStart(start + 15)
      setEnd(end + 15)
    } else {
      setEnd(props.trackerData.length)
      setStart(props.trackerData.length - 15)
    }
  }

  return (
    <div
      className={
        (props.darkMode ? 'bg-panelDark' : 'bg-white') +
        ' x-auto w-[700px] md:w-[900px] lg:w-[65vw] flex justify-center items-center flex-wrap h-[auto] rounded-lg p-1'
      }
    >
      <table className="w-[100%]">
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

        <div className="mx-auto flex justify-start lg:justify-center my-[20px]">
          <button
            onClick={handlePrevButton}
            className="text-primary cursor-pointer underline"
          >
            Prev
          </button>
          <label className="mx-2">
            ({start} - {end})
          </label>
          <button
            onClick={handleNextButton}
            className="text-primary cursor-pointer underline"
          >
            Next
          </button>
        </div>
      </table>

      {/* <GraphPanel /> */}
    </div>
  )
}
