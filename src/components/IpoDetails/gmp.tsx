import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { GmpDataType } from '../../app/ipo/data.types'

export default function GMP(props: { data: GmpDataType[] }) {
  return (
    <div id="gmp" className="my-[40px] mt-[50px]">
      <label className="text-primary text-[1.2rem] font-bold">
        Grey Market Premium
      </label>
      <div className="w-[100%] text-center my-0">
        <label className="mx-auto text-primary">
          GMP(Rs):{' '}
          <b className="text-green-500">
            {props.data[props.data.length - 1].gmp}
          </b>
        </label>
      </div>
      <div className="w-[100%] flex justify-center overflow-x-scroll">
        <LineChart width={1000} height={300} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey=""
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  )
}
