import React from 'react'

export default function LotSize() {
  return (
    <table
      id="ipoLotSize"
      className="w-[80%] mx-auto border-2 text-primary border-primary"
    >
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Retail (min)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Retail (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">S-HNI (min)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">S-HNI (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">B-HNI (min)</td>
        <td className="px-[10px]">nhi bataunga</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">B-HNI (max)</td>
        <td className="px-[10px]">200</td>
      </tr>
    </table>
  )
}
