import React from 'react'
import { RowTemplateType, TrackerDataType } from './table.types'

export default function RowTemplate(props: RowTemplateType) {
  return (
    <tr
      className={
        (props.darkMode ? '' : '') +
        ' text-slate-600 flex justify-around text-left items-center h-[40px] border'
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
