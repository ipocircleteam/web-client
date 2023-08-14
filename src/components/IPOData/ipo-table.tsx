import React from 'react'
import TableRow from './row-template'
import { mainipodata, smeipodata } from '@/dummydata'
import { RowDataType, TableDataType } from './ipodata.types'

export function IpoTable(props: TableDataType) {
  const data: RowDataType[] = props.type === 'main' ? mainipodata : smeipodata

  return (
    <div className="w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[60vw] lgx:w-[40vw] mx-auto mt-2 rounded-md border overflow-hidden">
      <table className="text-center">
        {/* TABLE HEADING */}
        <tr className="w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow">
          <td className="w-[10%]">#</td>
          <td className="w-[30%] text-left">IPO Name</td>
          <td className="w-[12.5%]">Open</td>
          <td className="w-[12.5%]">Close</td>
          <td className="w-[10%]">Status</td>
          <td className="w-[5%]"></td>
        </tr>

        {data.map((item) => {
          return (
            <TableRow
              key={item.sno}
              sno={item.sno}
              ipoID={item.ipoID}
              name={item.name}
              opendate={item.opendate}
              enddate={item.enddate}
              status={item.status}
            />
          )
        })}
      </table>
    </div>
  )
}
