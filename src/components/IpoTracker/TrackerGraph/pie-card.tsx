import React from 'react'
import PieChartComponent from './pie-chart'

export default function PieCard(props: {
  width: number
  height: number
  data: { name: string; value: number }[]
  colors: string[]
}) {
  return (
    <>
      <PieChartComponent
        width={300}
        height={270}
        data={props.data}
        colors={props.colors}
      />
    </>
  )
}
