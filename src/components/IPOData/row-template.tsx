'use client'

import React from 'react'
import { RowDataType } from './ipodata.types'

export default function TableRow(props: RowDataType) {
  const openIpoPage = () => {
    window.location.replace('/' + props.ipoID)
  }

  return (
    <tr
      className="w-[80vw] cursor-pointer p-4 text-primary custom-tablerow text-[13px] md:text-[1.1rem]"
      onClick={openIpoPage}
    >
      <td className="w-[5vw]">{props.sno}</td>
      <td title="See details" className="w-[25vw]">
        {props.name}
      </td>
      <td className="w-[15vw]">{props.opendate}</td>
      <td className="w-[15vw]">{props.enddate}</td>
      <td
        className={
          props.status === 'Live'
            ? 'text-green-500 w-[15vw]'
            : props.status === 'Upcoming'
            ? 'text-yellow-500 w-[15vw]'
            : 'text-red-500 w-[15vw]'
        }
      >
        {props.status}
      </td>
      <td title="See more" className="w-[15vw]">
        {' '}
        ...{' '}
      </td>
    </tr>
  )
}
