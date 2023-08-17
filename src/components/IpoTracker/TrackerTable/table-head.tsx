import React from 'react'

export default function TableHead(props: { darkMode: boolean }) {
  return (
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
  )
}
