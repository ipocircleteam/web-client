import React from 'react'
import { AnchorDetailsType } from '../../data.types'

export default function AnchorDetails(props: { data: AnchorDetailsType }) {
  return (
    <div id="anchorDetails">
      <table className="w-[80%] mx-auto border text-slate-600 ">
        <tr className="border">
          <td className="pl-[10px] border-r">Bid Date</td>
          <td className="pl-[10px]">{props.data.bid_date}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Shares Offerred</td>
          <td className="pl-[10px]">{props.data.shares_offerred}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Portion Size</td>
          <td className="pl-[10px]">{props.data.portion_size}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">
            Anchor lock in period (ends for 50% share, 30 days)
          </td>
          <td className="pl-[10px]">{props.data.anchorLockIn_50per_30days}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">
            Anchor lock in period (ends for remaining 50% share, 90 days)
          </td>
          <td className="pl-[10px]">{props.data.anchorLockIn_50per_90days}</td>
        </tr>
      </table>
    </div>
  )
}
