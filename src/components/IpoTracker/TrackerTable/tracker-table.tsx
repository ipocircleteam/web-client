import { trackerData } from '@/dummydata'
import React from 'react'
import RowTemplate from './row-template'
import TableHead from './table-head'

export default function TrackerTable(props: { darkMode: boolean }) {
  const theme = props.darkMode ? 'text-[#FFFFFF]' : 'text-primary'
  return (
    <div
      className={
        (props.darkMode ? 'bg-panelDark' : 'bg-gray-300') +
        ' mx-auto custom-shadow-panel overflow-hidden flex justify-center items-center flex-wrap h-[auto] my-[20px] rounded-lg p-2'
      }
    >
      <table className="w-[100%]">
        <TableHead darkMode={props.darkMode} />

        {trackerData.map((item, index) => {
          return (
            <RowTemplate data={item} index={index} darkMode={props.darkMode} />
          )
        })}
      </table>
    </div>
  )
}
