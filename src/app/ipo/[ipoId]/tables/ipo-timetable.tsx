import React from 'react'
import { IpoTimetableType } from '../../data.types'

export default function IpoTimeTable(props: { data: IpoTimetableType }) {
  return (
    <table
      id="ipoTimetable"
      className="w-[100%] md:w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Open Date</td>
        <td className="px-[10px]">{props.data.open_date}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Close Date</td>
        <td className="px-[10px]">{props.data.close_date}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Allotment Date</td>
        <td className="px-[10px]">{props.data.allotment_date}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Initiation of refunds</td>
        <td className="px-[10px]">{props.data.initiation_of_refunds}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Credit of ...</td>
        <td className="px-[10px]">{props.data.credit_of}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Listing Date</td>
        <td className="px-[10px]">{props.data.listing_date}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Cutoff</td>
        <td className="px-[10px]">{props.data.cutoff}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Time UPF</td>
        <td className="px-[10px]">{props.data.time_upf}</td>
      </tr>
    </table>
  )
}
