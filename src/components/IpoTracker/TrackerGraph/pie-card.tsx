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
      <span className="text-center">
        <label
          className={
            (props.darkMode ? 'text-white' : 'text-primary') +
            ' font-semibold text-center'
          }
        >
          {props.label}
        </label>
      </span>

      <span onClick={zoomIn}>
        <PieChartComponent
          width={200}
          height={180}
          innerRadius={30}
          outerRadius={90}
          data={props.data}
          colors={props.colors}
        />
      </span>
    </div>
  )
}
