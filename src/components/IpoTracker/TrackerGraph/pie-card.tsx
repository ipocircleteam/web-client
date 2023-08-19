import React from 'react'
import PieChartComponent from './pie-chart'
import Image from 'next/image'
import { Pin } from '../../../../public/icons'

export default function PieCard(props: {
  width: number
  height: number
  data: { name: string; value: number }[]
  colors: string[]
  label: string
  darkMode: boolean
}) {
  const zoomIn = () => {}

  return (
    <div className="m-2 flex flex-col justify-center">
      <span className="flex justify-between items-center">
        <label
          className={
            (props.darkMode ? 'text-white' : 'text-primary') +
            ' font-semibold text-center'
          }
        >
          {props.label}
        </label>
        <button className="border border-gray-600 rounded-full overflow-hidden w-[30px] h-[30px]">
          <Image
            className={(props.darkMode ? 'invert' : '') + ' mx-auto'}
            width={12}
            height={12}
            src={Pin}
            alt="Pin"
          />
        </button>
      </span>

      <span onClick={zoomIn}>
        <PieChartComponent
          width={250}
          height={220}
          innerRadius={30}
          outerRadius={90}
          data={props.data}
          colors={props.colors}
        />
      </span>
    </div>
  )
}
