import React from 'react'

export default function IpoDetails() {
  return (
    <table
      id="ipoDetails"
      className="w-[80%] mx-auto border-2 text-primary border-primary"
    >
      <tr className="border-2">
        <td className="px-[10px] border-r-2">IPO Date</td>
        <td className="px-[10px]">8 October 2023</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Face Value</td>
        <td className="px-[10px]">Rs 15000</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Price Band</td>
        <td className="px-[10px]">Rs 15000</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Lot Size (retails)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Total Size</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Fresh Issue</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">OFS</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Issue Type</td>
        <td className="px-[10px]">HNI</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Listing At</td>
        <td className="px-[10px]">Rs 20000</td>
      </tr>
    </table>
  )
}
