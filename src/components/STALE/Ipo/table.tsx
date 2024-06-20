import React from 'react'
// import { TableRow } from '../common'
// import { IpoWithStatus } from '../../types/ipodata'

export default function Table(props: { data: any[] }) {
  return (
    <table className="text-center w-[100%]">
      <tr className="w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow">
        <td className="w-[10%]">#</td>
        <td className="w-[30%] text-left">IPO Name</td>
        <td className="w-[12.5%]">Open</td>
        <td className="w-[12.5%]">Close</td>
        <td className="w-[10%]">Status</td>
      </tr>

      {/* {props.data.map((item) => {
        // return <TableRow key={item.sno} type='ipo-preview' data={item} />
      })} */}
    </table>
  )
}
