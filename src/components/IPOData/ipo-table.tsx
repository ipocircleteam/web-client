import React from 'react'
import TableRow from './row-template'
import { mainipodata, smeipodata } from '@/dummydata'
import { RowDataType, TableDataType } from './ipodata.types'

export function IpoTable(props: TableDataType) {
  const data: RowDataType[] = props.type === 'main' ? mainipodata : smeipodata

  return (
    <div className="w-[80vw] mx-auto mt-2 rounded-md border">
      <table className="text-center">
        {/* TABLE HEADING */}
        <tr className="w-[80vw] p-4 text-[20px] font-semibold text-grey-500 custom-tablerow">
          <td className="w-[5vw]">#</td>
          <td className="w-[25vw]">Name</td>
          <td className="w-[15vw]">Lot Price</td>
          <td className="w-[15vw]">STA</td>
          <td className="w-[15vw]">Application</td>
          <td className="w-[15vw]">End Date</td>
          <td className="w-[15vw]">Status</td>
        </tr>

        {data.map((item) => {
          return (
            <TableRow
              sno={item.sno}
              ipoID={item.ipoID}
              name={item.name}
              lotprice={item.lotprice}
              sta={item.sta}
              application={item.application}
              enddate={item.enddate}
              status={item.status}
            />
          )
        })}
      </table>
    </div>
  )
}
