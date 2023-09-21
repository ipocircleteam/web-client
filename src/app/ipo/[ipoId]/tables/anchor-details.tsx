import React from 'react'

export default function AnchorDetails() {
  return (
    <div id="anchorDetails">
      <table className="w-[80%] mx-auto border text-slate-600 ">
        <tr className="border">
          <td className="pl-[10px] border-r">Bid Date</td>
          <td className="pl-[10px]">31 Dec 2095</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Shares Offerred</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Portion Size</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">
            Anchor lock in period (ends for 50% share, 30 days)
          </td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">
            Anchor lock in period (ends for remining 50% share, 90 days)
          </td>
          <td className="pl-[10px]">100</td>
        </tr>
      </table>
    </div>
  )
}
