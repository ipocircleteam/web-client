import React from 'react'

export default function IpoTimeTable() {
  return (
    <table
      id="ipoTimetable"
      className="w-[100%] md:w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Open Date</td>
        <td className="px-[10px]">30 September 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Close Date</td>
        <td className="px-[10px]">5 October 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Allotment Date</td>
        <td className="px-[10px]">8 October 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Initiation of refunds</td>
        <td className="px-[10px]">8 October 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Credit of ...</td>
        <td className="px-[10px]">nhi bataunga</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Listing Date</td>
        <td className="px-[10px]">8 October 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Cutoff</td>
        <td className="px-[10px]">---</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Time UPF</td>
        <td className="px-[10px]">---</td>
      </tr>
    </table>
  )
}
