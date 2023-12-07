'use client'
import { LineChart } from '@mui/x-charts/LineChart'

export default function Linegraph(props: { data: any }) {
  return (
    <LineChart
      xAxis={[{ data: props.data.gmp.instant }]}
      series={[
        {
          curve: 'natural',
          data: props.data.gmp.values,
        },
      ]}
      //   width={400}
      //   height={300}
    />
  )
}
