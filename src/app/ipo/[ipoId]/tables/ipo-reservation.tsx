import React from 'react'

export default function IpoReservation() {
  return (
    <table
      id="ipoReservation"
      className="w-[100%] md:w-[80%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">QIB SHares Offerred</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">NIL Sares Offerred</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail Shares Offerred</td>
        <td className="px-[10px]">200</td>
      </tr>
    </table>
  )
}
