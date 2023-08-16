import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  Label,
  LabelList,
} from 'recharts'

export default function PieChartComponent(props: {
  width: number
  height: number
  data: { name: string; value: number }[]
  colors: string[]
}) {
  const total = props.data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <>
      <PieChart
        onClick={() => {
          alert('clicked')
        }}
        width={props.width}
        height={props.height}
      >
        <Pie
          data={props.data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={120}
          fill="#8884d8"
        >
          {props.data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={props.colors[index % props.colors.length]}
            />
          ))}
          <Label className="text-base" value={total} position="center" />
          <LabelList dataKey="name" position="inside" />
        </Pie>
        {/* <Legend /> */}
        <Tooltip />
      </PieChart>
    </>
  )
}
