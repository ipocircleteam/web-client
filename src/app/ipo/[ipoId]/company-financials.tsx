import { CompanyFinancialsType } from '../data.types'

export default function CompanyFinancials(props: {
  data: CompanyFinancialsType
}) {
  return (
    <div
      id="companyFinancials"
      className="overflow-x-scroll overflow-y-hidden lg:w-[800px] mx-auto"
    >
      <table className="w-[95%] lg:w-[80%] lg:mt-[20px] mx-auto border text-slate-600 ">
        <tr className="border">
          <td className="pl-[10px] border-r">Period Ended</td>
          <td className="pl-[10px] text-center">{props.data.period1.date}</td>
          <td className="pl-[10px] text-center">{props.data.period2.date}</td>
          <td className="pl-[10px] text-center">{props.data.period3.date}</td>
          {/* <td className="pl-[10px] text-center">{props.data.period4.date}</td> */}
          {/* <td className="pl-[10px] text-center">{props.data.period5.date}</td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Assets</td>
          <td className="pl-[10px] text-center">{props.data.period1.assets}</td>
          <td className="pl-[10px] text-center">{props.data.period2.assets}</td>
          <td className="pl-[10px] text-center">{props.data.period3.assets}</td>
          {/* <td className="pl-[10px] text-center">{props.data.period4.assets}</td> */}
          {/* <td className="pl-[10px] text-center">{props.data.period5.assets}</td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Revenue</td>
          <td className="pl-[10px] text-center">
            {props.data.period1.revenue}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period2.revenue}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period3.revenue}
          </td>
          {/* <td className="pl-[10px] text-center">
            {props.data.period4.revenue}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period5.revenue}
          </td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Profit after tax</td>
          <td className="pl-[10px] text-center">
            {props.data.period1.profits_after_tax}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period2.profits_after_tax}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period3.profits_after_tax}
          </td>
          {/* <td className="pl-[10px] text-center">
            {props.data.period4.profits_after_tax}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period5.profits_after_tax}
          </td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Net Worth</td>
          <td className="pl-[10px] text-center">
            {props.data.period1.networth}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period2.networth}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period3.networth}
          </td>
          {/* <td className="pl-[10px] text-center">
            {props.data.period4.networth}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period5.networth}
          </td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Reserves and Surplus</td>
          <td className="pl-[10px] text-center">
            {props.data.period1.reserves_and_surplus}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period2.reserves_and_surplus}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period3.reserves_and_surplus}
          </td>
          {/* <td className="pl-[10px] text-center">
            {props.data.period4.reserves_and_surplus}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period5.reserves_and_surplus}
          </td> */}
        </tr>
        <tr className="border">
          <td className="pl-[10px] border-r">Total Borrowing</td>
          <td className="pl-[10px] text-center">
            {props.data.period1.total_borrowings}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period2.total_borrowings}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period3.total_borrowings}
          </td>
          {/* <td className="pl-[10px] text-center">
            {props.data.period4.total_borrowings}
          </td>
          <td className="pl-[10px] text-center">
            {props.data.period5.total_borrowings}
          </td> */}
        </tr>
      </table>
    </div>
  )
}
