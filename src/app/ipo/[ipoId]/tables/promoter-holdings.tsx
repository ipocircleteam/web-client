import { PromoterHoldingsType } from '../../data.types'

export default function PromoterHoldings(props: {
  data: PromoterHoldingsType
}) {
  return (
    <table
      id="promoterHoldings"
      className="w-[95%] lg:w-[50%] mt-[20px] mx-auto border text-slate-600 "
    >
      <tr className="border">
        <td className="pl-[10px] border-r">Pre-issue share holding</td>
        <td className="pl-[10px]">{props.data.preissue_share_holdings}%</td>
      </tr>
      <tr className="border">
        <td className="pl-[10px] border-r">Post-issue share holding</td>
        <td className="pl-[10px]">{props.data.postissue_share_holdings}%</td>
      </tr>
    </table>
  )
}
