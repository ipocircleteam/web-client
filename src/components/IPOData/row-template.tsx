'use client'

import React from 'react'
import { RowDataType } from './ipodata.types'

export default function TableRow(props: RowDataType) {
  const openIpoPage = () => {
    window.location.replace('/' + props.ipoID)
  }

  return (
    <tr
      className="w-[100%] cursor-pointer p-4 text-primary custom-tablerow text-[13px] md:text-[1.1rem]"
      onClick={openIpoPage}
    >
      <td className="w-[5%]">{props.sno}</td>
      <td title="See details" className="w-[30%] text-left">
        <div className="m-0 p-0 flex justify-start items-center">
          {props.name}
          {Number(props.enddate.substring(0, 2)) === new Date().getDate() ? (
            <Closetag />
          ) : (
            ''
          )}
        </div>
      </td>
      <td className="w-[10%]">{props.opendate.substring(0, 6)}</td>
      <td className="w-[10%]">{props.enddate.substring(0, 6)}</td>
      <td
        className={
          props.status === 'Live'
            ? 'text-green-500 w-[15%]'
            : props.status === 'Upcoming'
            ? 'text-yellow-500 w-[15vw]'
            : 'text-red-500 w-[15vw]'
        }
      >
        <div className="m-0 p-0 flex justify-center items-center">
          {props.status === 'Live' && (
            <div className="custom-animate-ping w-[10px] h-[10px] mr-2 rounded-full bg-secondary"></div>
          )}
          {props.status}
        </div>
      </td>

      <td className="w-[5%] cursor-pointer">
        <button
          title="See more"
          className="bg-baseTwo flex items-center justify-center m-1 
        w-[30px] h-[20px] rounded-sm"
        >
          ...
        </button>
      </td>
    </tr>
  )
}

function Closetag() {
  return (
    <div className="text-[10px] flex flex-wrap items-center justify-center text-red-500 ml-2 px-[2px] border border-red-500 rounded-lg">
      <label>Closing</label>
      <label>Today</label>
    </div>
  )
}
