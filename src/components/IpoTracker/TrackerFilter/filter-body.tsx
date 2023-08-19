import React from 'react'
import FilterFooter from './filter-footer'

export default function FilterBody() {
  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-start p-2 px-4">
        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className="text-white h-[50px] flex items-center text-[1.2rem]">
            Sector
          </label>
          <select className="w-[70%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg">
            <option>All</option>
            <option>Pharma</option>
            <option>IT</option>
            <option>Edtech</option>
            <option>Fintech</option>
          </select>
        </div>

        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className="text-white h-[50px] flex items-center text-[1.2rem]">
            Year
          </label>
          <input
            className="w-[70%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg"
            type="number"
            max={new Date().getFullYear()}
            value={new Date().getFullYear()}
          />
        </div>

        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className="text-white h-[50px] flex items-center text-[1.2rem]">
            Listing Price
          </label>
          <input
            placeholder="0"
            className="w-[70%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg"
            type="number"
          />
        </div>

        <div className="w-[90%] mx-auto my-2">
          <label className="text-white h-[50px] flex items-center text-[1.2rem]">
            Select parameters to compare
          </label>
          <section className="flex justify-around items-start">
            <select className="w-[30%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg">
              <option>Listing Price</option>
              <option>Current Price</option>
              <option>Dayend Price</option>
              <option>Issue Price</option>
            </select>
            <select className="w-[30%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg">
              <option>More than</option>
              <option>Equal to</option>
              <option>Less than</option>
            </select>
            <select className="w-[30%] text-white h-[50px] bg-panelDark p-2 outline-none border border-gray-600 rounded-lg">
              <option>Current Price</option>
              <option>Listing Price</option>
              <option>Dayend Price</option>
              <option>Issue Price</option>
            </select>
          </section>
        </div>
      </div>
      <FilterFooter />
    </>
  )
}
