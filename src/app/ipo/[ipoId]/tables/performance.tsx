import React from 'react'

export default function PerformanceIndicators() {
  return (
    <table
      id="performanceIndicators"
      className="w-[80%] mx-auto border-2 text-primary border-primary"
    >
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Market Cap (EG)</td>
        <td className="px-[10px]">000000</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">ROE</td>
        <td className="px-[10px]">100%</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">ROCE</td>
        <td className="px-[10px]">300%</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">Debt</td>
        <td className="px-[10px]">150%</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">EPS</td>
        <td className="px-[10px]">120%</td>
      </tr>
      <tr className="border-2">
        <td className="px-[10px] border-r-2">RoNW</td>
        <td className="px-[10px]">90%</td>
      </tr>
    </table>
  )
}
