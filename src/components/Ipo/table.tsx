import { mainipodata } from '@/dummydata'
import React from 'react'
import TableRow from '../Home-Page/IPOData/row-template'
import { RowDataType } from '../Home-Page/IPOData/ipodata.types'

export default function Table() {
  const data: RowDataType[] = mainipodata

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

      {data.map((item) => {
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
      {data.map((item) => {
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
      {data.map((item) => {
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
      {data.map((item) => {
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
  )
}
