import React from 'react'
import PieCard from './pie-card'

export default function GraphPanel(props: {
  darkMode: boolean
  data1: { name: string; value: number }[]
}) {
  const COLORS = ['#00C49F', '#3051bf']

  return (
    <div
      className={
        (props.darkMode ? ' ' : ' ') +
        ' border overflow-hidden w-[100%] flex justify-center items-center flex-wrap h-[auto] rounded-lg p-2'
      }
    >
      <PieCard
        width={300}
        height={270}
        data={props.data1}
        colors={COLORS}
        darkMode={props.darkMode}
        label="Listing Price vs Issue Price"
      />
    </div>
  )
}
