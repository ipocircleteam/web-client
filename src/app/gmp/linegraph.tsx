'use client'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

export default function Linegraph(props: { data: any }) {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <ResponsiveContainer width={300} height={180}>
        <LineChart
          data={props.data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="instant" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
