'use client'

import React, { useState } from 'react'
import FilterFooter from './filter-footer'
// import { Sectors } from '@/lib/constants/data'

export default function FilterBody(props: {
  filter: (
    sector: string,
    year: number,
    price: number,
    p1: String,
    p2: String,
    op: String,
  ) => void
  positiveListing: () => void
  negativeListing: () => void
  cpGreaterthanIp: () => void
  cpLesserthanIp: () => void
  cpGreaterthanLp: () => void
  cpLesserthanLp: () => void
}) {
  const [form, setForm] = useState({
    sector: 'All',
    year: 0,
    listing: 0,
    parameter1: 'Select parameter 1',
    parameter2: 'Select parameter 2',
    operator: 'Select comparator',
  })

  return (
    <>
      <div className="w-[100%] md:flex justify-around items-center p-2 px-4">
        <div className="md:w-[45%]">
          <div className=" w-[100%] mx-auto my-2 flex items-center justify-between">
            <label className=" h-[40px] flex items-center text-[15px]">
              Sector
            </label>
            <select
              name="sector"
              onChange={(e) => {
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }}
              className="w-[50%] h-[40px] p-1 outline-none border border-gray-600 rounded-md"
            >
              <option>All</option>
              {/* {Sectors.map((sector) => {
                return <option key={sector}>{sector}</option>
              })} */}
            </select>
          </div>

          <div className=" w-[100%] mx-auto my-2 flex items-center justify-between">
            <label className=" h-[40px] flex items-center text-[15px]">
              Listing Gain: {form.listing}%
            </label>
            <input
              className="w-[50%] h-[40px] p-1 outline-none border border-gray-600 rounded-lg"
              type="number"
              name="listing"
              placeholder="ente % value ..."
              value={form.listing === 0 ? '' : form.listing}
              onChange={(e) => {
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }}
            />
          </div>
        </div>

        <div className="md:w-[45%]">
          <div className="flex justify-between items-center w-[100%] mx-auto my-2">
            <button
              id="positive-tracker"
              className="h-[40px] text-green-500 border-green-500 shadow-m shadow-green-100 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.positiveListing()
              }}
            >
              Positive Listing
            </button>
          </div>

          <div className="flex justify-between items-center w-[100%] mx-auto my-2">
            <button
              id="negative-tracker"
              className="h-[40px] text-red-500 border-red-500 shadow-m shadow-red-100 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.negativeListing()
              }}
            >
              Negative Listing
            </button>
          </div>
        </div>
      </div>

      <FilterFooter
        applyFlter={() => {
          props.filter(
            form.sector,
            form.year,
            form.listing,
            form.parameter1,
            form.parameter2,
            form.operator,
          )
        }}
        resetFilter={() => {
          props.filter('All', 0, 0, '', '', '')
        }}
      />
    </>
  )
}
