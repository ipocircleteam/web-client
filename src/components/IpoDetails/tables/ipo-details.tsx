import { IpoDetailsType } from '../../../app/ipo/data.types'

export default function IpoDetails(props: { data: IpoDetailsType }) {
  return (
    <table
      id="ipoDetails"
      className="w-[95%] lg:w-[50%] mx-auto mt-[20px] border text-slate-600 font-normal border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border">IPO Date</td>
        <td className="px-[10px]">
          {Number(props.data.ipo_date.substring(0, 4)) <= 1970
            ? '---'
            : props.data.ipo_date.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border">Face Value</td>
        <td className="px-[10px]">Rs {props.data.face_value}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border">Price Band</td>
        <td className="px-[10px]">Rs {props.data.price_band}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Lot Size (retails)</td>
        <td className="px-[10px]">{props.data.lot_size_retails}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Total Size</td>
        <td className="px-[10px]">{props.data.total_size}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Fresh Issue</td>
        <td className="px-[10px]">{props.data.fresh_issue}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">OFS</td>
        <td className="px-[10px]">{props.data.ofs}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Issue Type</td>
        <td className="px-[10px]">{props.data.issue_type}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Listing At</td>
        <td className="px-[10px]">{props.data.listing_at}</td>
      </tr>
    </table>
  )
}
