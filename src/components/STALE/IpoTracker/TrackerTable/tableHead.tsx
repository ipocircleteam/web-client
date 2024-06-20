import React from 'react'

export default function TableHead() {
  return (
    <tr
      className={
        ' text-slate-600 grid grid-cols-5 items-center md:text-center text-[10px] md:text-[15px] p-1 h-[40px] bg-slate-200 font-bold border'
      }
    >
      <td className="col-span-2 text-left">Company</td>
      <td className="text-left">Issue</td>
      <td className="text-left">Listing</td>
      {/* <td>DayEnd</td> */}
      {/* <td>Current</td> */}
      <td className="text-left">Sector</td>
    </tr>
  )
}
