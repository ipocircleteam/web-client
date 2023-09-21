import NameDivider from '@/components/Global/name-divider'
import React from 'react'

export default function CompanyFinancials() {
  return (
    <div id="companyFinancials">
      <NameDivider text="Company Financials" width={80} />
      <table className="w-[80%] mx-auto border-2 text-primary ">
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Period Ended</td>
          <td className="pl-[10px] text-center">31 March 2019</td>
          <td className="pl-[10px] text-center">31 March 2020</td>
          <td className="pl-[10px] text-center">31 March 2021</td>
          <td className="pl-[10px] text-center">31 March 2022</td>
          <td className="pl-[10px] text-center">31 March 2023</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Assets</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Revenue</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Profit after tax</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Net Worth</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Reserves and Surplus</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
        <tr className="border-2">
          <td className="pl-[10px] border-r-2">Total Borrowing</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
          <td className="pl-[10px] text-center">1000</td>
        </tr>
      </table>
    </div>
  )
}
