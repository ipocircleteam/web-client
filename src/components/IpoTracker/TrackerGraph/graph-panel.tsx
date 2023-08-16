import React from 'react'
import PieCard from './pie-card'

export default function GraphPanel(props: { darkMode: boolean }) {
  const data1 = [
    { name: 'Gain', value: 1900 },
    { name: 'Loss', value: 300 },
  ]

  const data2 = [
    { name: 'Gain', value: 400 },
    { name: 'Loss', value: 300 },
  ]

  const data3 = [
    { name: 'Gain', value: 200 },
    { name: 'Loss', value: 300 },
  ]

  const COLORS = ['#00C49F', '#FF0000']

  return (
    <div
      className={
        (props.darkMode ? 'bg-panelLight' : 'bg-gray-300') +
        ' w-[90vw] mx-auto custom-shadow-panel overflow-hidden flex justify-center items-center flex-wrap h-[auto] my-[20px] rounded-lg p-2'
      }
    >
      <PieCard width={300} height={270} data={data1} colors={COLORS} />
      <PieCard width={300} height={270} data={data2} colors={COLORS} />
      <PieCard width={300} height={270} data={data3} colors={COLORS} />
    </div>
  )
}
