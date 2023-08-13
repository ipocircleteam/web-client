'use client'

import React from 'react'
import { RowDataType } from './ipodata.types'

export default function TableRow(props: RowDataType) {
  const openIpoPage = () => {
    window.location.replace('/' + props.ipoID)
  }

  return (
    <tr
      className="w-[80vw] cursor-pointer p-4 text-primary custom-tablerow text-[1.3rem]"
      onClick={openIpoPage}
    >
      <td className="w-[5vw]">{props.sno}</td>
      <td className="w-[25vw]">{props.name}</td>
      <td className="w-[15vw]">{props.lotprice}</td>
      <td className="w-[15vw]">{props.sta}</td>
      <td className="w-[15vw]">{props.application}</td>
      <td className="w-[15vw]">{props.enddate}</td>
      <td
        className={
          props.status === 'Live'
            ? 'text-green-500 w-[15vw]'
            : 'text-red-500 w-[15vw]'
        }
      >
        {props.status}
      </td>
    </tr>
  )
}
