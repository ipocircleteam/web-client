import { LotSizeType } from '../../data.types'

export default function LotSize(props: { data: LotSizeType }) {
  return (
    <table
      id="ipoLotSize"
      className="w-[95%] lg:w-[50%] mt-[20px] mx-auto border text-slate-600 border-primary"
    >
      <tr className="border">
        <td className="px-[10px] border-r">Retail (min)</td>
        <td className="px-[10px]">{props.data.min_retail}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail (max)</td>
        <td className="px-[10px]">{props.data.max_retail}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (min)</td>
        <td className="px-[10px]">{props.data.min_shni}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (max)</td>
        <td className="px-[10px]">{props.data.max_shni}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (min)</td>
        <td className="px-[10px]">{props.data.min_bhni}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (max)</td>
        <td className="px-[10px]">{props.data.max_bhni}</td>
      </tr>
    </table>
  )
}
