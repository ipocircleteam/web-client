import React from 'react'

export default function IpoDetails() {
  return (
    <table
      id="ipoDetails"
      className="w-[100%] md:w-[50%] mx-auto mt-[20px] border text-slate-600 font-normal border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border">IPO Date</td>
        <td className="px-[10px]">8 October 2023</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border">Face Value</td>
        <td className="px-[10px]">Rs 15000</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border">Price Band</td>
        <td className="px-[10px]">Rs 15000</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Lot Size (retails)</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Total Size</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Fresh Issue</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">OFS</td>
        <td className="px-[10px]">200</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Issue Type</td>
        <td className="px-[10px]">HNI</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Listing At</td>
        <td className="px-[10px]">Rs 20000</td>
      </tr>
    </table>
  )
}
