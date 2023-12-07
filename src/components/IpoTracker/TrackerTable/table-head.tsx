import React from 'react'

export default function TableHead(props: { darkMode: boolean }) {
  return (
    <tr
      className={
        (props.darkMode ? '' : '') +
        ' text-slate-600 grid grid-cols-5 items-center md:text-center text-[10px] md:text-[15px] p-1 h-[40px] bg-slate-200 font-bold border'
      }
    >
      <td className="col-span-2">Company</td>
      <td>Issue</td>
      <td>Listing</td>
      {/* <td>DayEnd</td> */}
      {/* <td>Current</td> */}
      <td>Sector</td>
    </tr>
  )
}
