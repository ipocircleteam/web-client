import { LotSizeType } from '../../../../app/ipo/data.types'

export default function LotSize(props: { data: LotSizeType }) {
  return (
    <table
      id="ipoLotSize"
      className="w-[95%] lg:w-[50%] mt-[20px] mx-auto border text-slate-600 "
    >
      <thead>
        <tr className="border">
          <td className="px-[10px] border-r">Category</td>
          <td className="px-[10px] border-r">Lots Size</td>
          <td className="px-[10px] border-r">Shares</td>
          <td className="px-[10px]">Price</td>
        </tr>
      </thead>
      <tr className="border">
        <td className="px-[10px] border-r">Retail (min)</td>
        <td className="px-[10px] border-r">{props.data.min_retail_lots}</td>
        <td className="px-[10px] border-r">{props.data.min_retail_shares}</td>
        <td className="px-[10px]">{props.data.min_retail_price}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">Retail (max)</td>
        <td className="px-[10px] border-r">{props.data.max_retail_lots}</td>
        <td className="px-[10px] border-r">{props.data.max_retail_shares}</td>
        <td className="px-[10px]">{props.data.max_retail_price}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (min)</td>
        <td className="px-[10px] border-r">{props.data.min_shni_lots}</td>
        <td className="px-[10px] border-r">{props.data.min_shni_shares}</td>
        <td className="px-[10px]">{props.data.min_shni_price}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">S-HNI (max)</td>
        <td className="px-[10px] border-r">{props.data.max_shni_lots}</td>
        <td className="px-[10px] border-r">{props.data.max_shni_shares}</td>
        <td className="px-[10px]">{props.data.max_shni_price}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (min)</td>
        <td className="px-[10px] border-r">{props.data.min_bhni_lots}</td>
        <td className="px-[10px] border-r">{props.data.min_bhni_shares}</td>
        <td className="px-[10px]">{props.data.min_bhni_price}</td>
      </tr>
      <tr className="border">
        <td className="px-[10px] border-r">B-HNI (max)</td>
        <td className="px-[10px] border-r">{props.data.max_bhni_lots}</td>
        <td className="px-[10px] border-r">{props.data.max_bhni_shares}</td>
        <td className="px-[10px]">{props.data.max_bhni_price}</td>
      </tr>
    </table>
  )
}
