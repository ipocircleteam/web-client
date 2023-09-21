import React from 'react'

export default function LotSize() {
  return (
    <table
      id="ipoLotSize"
      className="w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Retail (min)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (min)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (min)</td>
        <td className="px-[10px]">nhi bataunga</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
    </table>
  )
}
