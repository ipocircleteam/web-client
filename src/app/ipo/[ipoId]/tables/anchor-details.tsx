import React from 'react'

export default function AnchorDetails() {
  return (
    <div id="anchorDetails">
      <table className="w-[80%] mx-auto border-2 text-primary ">
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Bid Date</td>
          <td className="pl-[10px]">31 Dec 2095</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Shares Offerred</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Portion Size</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">
            Anchor lock in period (ends for 50% share, 30 days)
          </td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">
            Anchor lock in period (ends for remining 50% share, 90 days)
          </td>
          <td className="pl-[10px]">100</td>
        </tr>
      </table>
    </div>
  )
}
