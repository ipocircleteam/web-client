import { PerformanceIndicatorsType } from '../../data.types'

export default function PerformanceIndicators(props: {
  data: PerformanceIndicatorsType
}) {
  return (
    <table
      id="performanceIndicators"
      className="w-[95%] lg:w-[40%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Market Cap (EG)</td>
        <td className="px-[10px]">{props.data.market_cap}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">ROE</td>
        <td className="px-[10px]">{props.data.roe}%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">ROCE</td>
        <td className="px-[10px]">{props.data.roce}%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Debt</td>
        <td className="px-[10px]">{props.data.debt}%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">EPS</td>
        <td className="px-[10px]">{props.data.eps}%</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">RoNW</td>
        <td className="px-[10px]">{props.data.ronw}%</td>
      </tr>
    </table>
  )
}
