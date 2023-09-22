import React from 'react'

export default function PerformanceIndicators() {
  return (
    <table
      id="performanceIndicators"
      className="w-[100%] md:w-[40%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Market Cap (EG)</td>
        <td className="px-[10px]">000000</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">ROE</td>
        <td className="px-[10px]">100%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">ROCE</td>
        <td className="px-[10px]">300%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Debt</td>
        <td className="px-[10px]">150%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">EPS</td>
        <td className="px-[10px]">120%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">RoNW</td>
        <td className="px-[10px]">90%</td>
      </tr>
    </table>
  )
}
