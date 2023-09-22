import React from 'react'

export default function TableHead(props: { darkMode: boolean }) {
  return (
    <tr
      className={
        (props.darkMode ? '' : '') +
        ' text-slate-600 flex justify-around items-center h-[40px] border'
      }
    >
      <td>S.No</td>
      <td>Company</td>
      <td>Issue</td>
      <td>Listing</td>
      <td>DayEnd</td>
      <td>Current</td>
    </tr>
  )
}
