import { IpoTimetableType } from '../../../app/ipo/data.types'

export default function IpoTimeTable(props: { data: IpoTimetableType }) {
  return (
    <table
      id="ipoTimetable"
      className="w-[95%] lg:w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Open Date</td>
        <td className="px-[10px]">
          {Number(props.data.open_date.substring(0, 4)) <= 1970
            ? '---'
            : props.data.open_date.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Close Date</td>
        <td className="px-[10px]">
          {Number(props.data.close_date.substring(0, 4)) <= 1970
            ? '---'
            : props.data.close_date.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Allotment Date</td>
        <td className="px-[10px]">
          {Number(props.data.allotment_date.substring(0, 4)) <= 1970
            ? '---'
            : props.data.allotment_date.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Initiation of refunds</td>
        <td className="px-[10px]">
          {Number(props.data.initiation_of_refunds.substring(0, 4)) <= 1970
            ? '---'
            : props.data.initiation_of_refunds.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Credit of ...</td>
        <td className="px-[10px]">{props.data.credit_of}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Listing Date</td>
        <td className="px-[10px]">
          {Number(props.data.listing_date.substring(0, 4)) <= 1970
            ? '---'
            : props.data.listing_date.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Cutoff</td>
        <td className="px-[10px]">
          {Number(props.data.cutoff.substring(0, 4)) <= 1970
            ? '---'
            : props.data.cutoff.substring(0, 10)}
        </td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Time UPF</td>
        <td className="px-[10px]">
          {Number(props.data.time_upf.substring(0, 4)) <= 1970
            ? '---'
            : props.data.time_upf.substring(0, 10)}
        </td>
      </tr>
    </table>
  )
}
