import NameDivider from '@/components/Global/name-divider'
import React from 'react'

export default function Subscriptions() {
  return (
    <div id="subscriptionsTable">
      <table className="w-[80%] mx-auto border-2 text-primary ">
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">QIB</td>
          <td className="pl-[10px]">text hu ji</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">NII (SNII)</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">NII (BNII)</td>
          <td className="pl-[10px]">100</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Retail</td>
          <td className="pl-[10px]">100</td>
        </tr>
      </table>
    </div>
  )
}
