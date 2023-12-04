import TableRow from './row-template'
import { RowDataType } from './ipodata.types'

export function IpoTable(props: { data: RowDataType[] }) {
  return (
    // Ad class custom-shadow-table to add shadow around table
    <div className="w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[65vw] lgx:w-[50vw] mx-auto mt-2 rounded-md border overflow-hidden">
      <table className="text-center w-[100%]">
        <tr className="w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow">
          <td className="w-[10%]">#</td>
          <td className="w-[25%] text-left">IPO Name</td>
          <td className="w-[15%]">Open</td>
          <td className="w-[15%]">Close</td>
          <td className="w-[10%]">Status</td>
          <td className="w-[5%]"></td>
        </tr>

        {props.data.map((item) => {
          const data = {
            sno: item.sno,
            ipoID: item.ipoID,
            name: item.name,
            opendate: item.opendate,
            enddate: item.enddate,
            status: item.status,
          }
          return <TableRow key={item.sno} data={data} scaling={false} />
        })}
      </table>
    </div>
  )
}
