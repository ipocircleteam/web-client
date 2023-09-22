import React from 'react'

export default function TableHead(props: { darkMode: boolean }) {
  return (
    <tr
      className={
        (props.darkMode ? '' : '') +
        ' text-slate-600 grid grid-cols-7 items-center p-1 h-[40px] bg-slate-200 font-bold border'
      }
    >
      <td>S.No</td>
      <td>Company</td>
      <td>Issue</td>
      <td>Listing</td>
      <td>DayEnd</td>
      <td>Current</td>
      <td>Sector</td>
    </tr>
  )
}
