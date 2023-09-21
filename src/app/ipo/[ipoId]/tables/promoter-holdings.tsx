import React from 'react'

export default function PromoterHoldings() {
  return (
    <table
      id="promoterHoldings"
      className="w-[80%] mx-auto border text-slate-600 "
    >
      <tr className="border">
        <td className="pl-[10px] border-r">Pre-issue share holding</td>
        <td className="pl-[10px]">100%</td>
      </tr>
      <tr className="border">
        <td className="pl-[10px] border-r">Post-issue share holding</td>
        <td className="pl-[10px]">100%</td>
      </tr>
    </table>
  )
}
