import { IpoReservationType } from '../../../app/ipo/data.types'

export default function IpoReservation(props: { data: IpoReservationType }) {
  console.log(props.data)

  return (
    <table
      id="ipoReservation"
      className="w-[95%] lg:w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">QIB Shares Offerred</td>
        <td className="px-[10px]">{props.data.qib_shares_offerred}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">NIL Shares Offerred</td>
        <td className="px-[10px]">{props.data.nil_shares_offerred}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail Shares Offerred</td>
        <td className="px-[10px]">{props.data.retail_shares_offerred}</td>
      </tr>
    </table>
  )
}
