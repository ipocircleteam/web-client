import { SubscriptionsType } from '../../../app/ipo/data.types'

export default function Subscriptions(props: { data: SubscriptionsType }) {
  return (
    <div id="subscriptionsTable">
      <table className="w-[95%] lg:w-[40%] mt-[20px] mx-auto border text-slate-600 ">
        <tr className="border">
          <td className="pl-[10px] border-r">QIB</td>
          <td className="pl-[10px]">{props.data.qib}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">NII (SNII)</td>
          <td className="pl-[10px]">{props.data.nii_snii}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">NII (BNII)</td>
          <td className="pl-[10px]">{props.data.nii_bnii}</td>
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Retail</td>
          <td className="pl-[10px]">{props.data.retail}</td>
        </tr>
      </table>
    </div>
  )
}
