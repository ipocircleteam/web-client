import React from 'react'
import { TrackerDataType } from './table.types'

export default function RowTemplate(props: {
  data: TrackerDataType
  index: number
  darkMode: boolean
}) {
  return (
    <tr
      className={
        (props.darkMode ? 'text-[#FFFFFF]' : 'text-primary') +
        ' flex justify-around text-left scaling-transition items-center h-[40px] border border-b border-gray-800'
      }
    >
      <td>{props.index}</td>
      <td>{props.data.company}</td>
      <td>{props.data.issue}</td>
      <td>{props.data.listing}</td>
      <td>{props.data.dayend}</td>
      <td>{props.data.current}</td>
    </tr>
  )
}
