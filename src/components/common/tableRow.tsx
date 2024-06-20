import { IpoWithStatus } from '@/types/ipodata'

interface TableRowProps {
  type: 'ipo-preview' | 'ipo-tracker'
  data: IpoWithStatus
}
// w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow
const TableRow = ({ data, type }: TableRowProps) => {
  return (
    <a href={`/ipo/${data.ipo_id}`}>
      <tr className="">
        <td className="w-[10%]">{data.sno}</td>
        <td className="w-[25%] text-left">{data.name.split('IPO')[0]}</td>
        <td className="w-[15%]">{data.opening_date}</td>
        <td className="w-[15%]">{data.closing_date}</td>
        <td className="w-[10%]">{data.opening_date}</td>
        <td className="w-[5%]"></td>
      </tr>
    </a>
  )
}

export default TableRow
