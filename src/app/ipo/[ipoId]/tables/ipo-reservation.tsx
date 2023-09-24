import React from 'react'
import { IpoReservationType } from '../../data.types'

export default function IpoReservation(props: { data: IpoReservationType }) {
  return (
    <table
      id="ipoReservation"
      className="w-[100%] md:w-[80%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">QIB Shares Offerred</td>
        <td className="px-[10px]">{props.data.qib_shares_offerred}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">NIL Shares Offerred</td>
        <td className="px-[10px]">{props.data.nil_shares_offerred}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail Shares Offerred</td>
        <td className="px-[10px]">{props.data.retail_shares_offerred}</td>
      </tr>
    </table>
  )
}
