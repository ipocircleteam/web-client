import React from 'react'
import { RowTemplateType, TrackerDataType } from './table.types'

export default function RowTemplate(props: RowTemplateType) {
  return (
    <tr
      className={
        (props.darkMode ? '' : '') +
        ' text-slate-600 grid grid-cols-7 items-center p-2 h-[40px] border overflow-hidden'
      }
    >
      <td>{props.data.id}</td>
      <td>{props.data.company.substring(0, 8)}</td>
      <td>{props.data.issue}</td>
      <td>{props.data.listing}</td>
      <td>{props.data.dayend}</td>
      <td>{props.data.current}</td>
      <td>{props.data.sector}</td>
    </tr>
  )
}
