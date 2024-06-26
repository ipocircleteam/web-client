import React from 'react'
// import {
//   RowTemplateType,
//   TrackerDataType,
// } from '../../../types/ipoTracker'

export default function RowTemplate(props: any) {
  return (
    <a href={`/ipo/${props.data.id}`}>
      <tr
        className={
          ' text-slate-600 grid grid-cols-5 text-right md:text-center text-[12px] md:text-[15px] items-center p-2 h-[40px border overflow-hidden'
        }
      >
        {/* <td className=' overflow-x-clip '>{props.data.id}</td> */}
        <td className="overflow-x-clip text-left col-span-2">
          {props.data.company_name}
        </td>
        <td className="overflow-x-clip text-left">{props.data.issue_price}</td>
        <td className="overflow-x-clip text-left">
          {props.data.listing_price}
        </td>
        {/* <td className="overflow-x-clip">{props.data.dayend_price}</td> */}
        {/* <td className="overflow-x-clip">{props.data.current_price}</td> */}
        <td className="overflow-x-clip text-left">{props.data.sector}</td>
      </tr>
    </a>
  )
}
