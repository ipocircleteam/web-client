'use client'

import React, { ReactNode, useState } from 'react'
import RowTemplate from './rowTemplate'
import TableHead from './tableHead'
import { TrackerDataType } from '../../../lib/types/trackerTable.types'
import TableTopFilters from './tableTopFilters'

export default function TrackerTable(props: {
  trackerData: TrackerDataType[]
  setAll: () => void
  setMain: () => void
  setSme: () => void
  filterState: string
  children: ReactNode
}) {
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

  return (
    <>
      <div
        className={
          ' mx-auto w-[100%] lg:w-[95%] flex justify-start  lg:justify-center items-center flex-wrap h-[auto] rounded-lg p-1'
        }
      >
        <TableTopFilters
          setAll={props.setAll}
          setMain={props.setMain}
          setSme={props.setSme}
          handleNextButton={handleNextButton}
          handlePrevButton={handlePrevButton}
          start={start}
          end={end}
          length={props.trackerData.length}
          filterState={props.filterState}
        />

        <div className="w-[100%] hidden" id="trackerFilters">
          {props.children}
        </div>

        <table className="w-[100%] mx-auto">
          <TableHead />

          {viewData.map((item, index) => {
            return (
              <RowTemplate key={'row-' + index} data={item} index={index} />
            )
          })}
        </table>
      </div>
    </>
  )
}
