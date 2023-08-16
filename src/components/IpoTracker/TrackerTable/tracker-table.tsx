import { trackerData } from '@/dummydata'
import React from 'react'
import RowTemplate from './row-template'

export default function TrackerTable(props: { darkMode: boolean }) {
  const theme = props.darkMode ? 'text-[#FFFFFF]' : 'text-primary'
  return (
    <div
      className={
        (props.darkMode ? 'bg-panelLight' : 'bg-gray-300') +
        ' w-[90vw] mx-auto custom-shadow-panel overflow-hidden flex justify-center items-center flex-wrap h-[auto] my-[20px] rounded-lg p-2'
      }
    >
      <table className="w-[100%]">
        <tr
          className={
            (props.darkMode ? 'text-baseTwo' : 'text-primary') +
            ' flex justify-around items-center h-[40px] border border-b border-gray-800'
          }
        >
          <td>S.No</td>
          <td>Company</td>
          <td>Issue</td>
          <td>Listing</td>
          <td>DayEnd</td>
          <td>Current</td>
        </tr>
        {trackerData.map((item, index) => {
          return (
            <RowTemplate data={item} index={index} darkMode={props.darkMode} />
          )
        })}
      </table>
    </div>
  )
}
