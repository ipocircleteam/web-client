import React from 'react'
import TableRow from '../Home/IPOData/rowTemplate'
import { RowDataType } from '../../lib/types/ipodata.types'

export default function Table(props: { data: RowDataType[] }) {
  return (
    <table className="text-center w-[100%]">
      <tr className="w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow">
        <td className="w-[10%]">#</td>
        <td className="w-[30%] text-left">IPO Name</td>
        <td className="w-[12.5%]">Open</td>
        <td className="w-[12.5%]">Close</td>
        <td className="w-[10%]">Status</td>
        <td className="w-[5%]"></td>
      </tr>

      {props.data.map((item) => {
        const openDate = new Date(item.opendate)
        const closeDate = new Date(item.enddate)
        const currDate = new Date()
        var status = 'Upcoming'
        if (openDate > currDate) status = 'Upcoming'
        else if (openDate <= currDate && closeDate >= currDate) status = 'Live'
        else if (currDate > closeDate) status = 'Closed'

        const data = {
          sno: item.sno,
          ipoID: item.ipoID,
          name: item.name.substring(0, 45),
          opendate: item.opendate,
          enddate: item.enddate,
          status: status,
        }
        return <TableRow key={item.sno} data={data} scaling={false} />
      })}
    </table>
  )
}
