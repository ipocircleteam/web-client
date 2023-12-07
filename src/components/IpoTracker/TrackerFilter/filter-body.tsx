'use client'

import React, { useState } from 'react'
import FilterFooter from './filter-footer'
import { Sectors } from '@/data'

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
      <div className="w-[100%] flex flex-col justify-center items-start p-2 px-4">
        <label>Filters: </label>

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

        {/* <div className="flex justify-center items-center w-[100%]">
          <div className="flex justify-between items-center w-[50%] my-2 mx-1">
            <button
              id="negative-tracker"
              className="h-[40px] shadow-m hover:bg-gray-100 bg-gray-200 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.cpGreaterthanIp()
              }}
            >
              CP &gt; IP
            </button>
          </div>
          <div className="flex justify-between items-center w-[50%] my-2 mx-1">
            <button
              id="negative-tracker"
              className="h-[40px] shadow-m hover:bg-gray-100 bg-gray-200 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.cpLesserthanIp()
              }}
            >
              CP &lt; IP
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-[100%]">
          <div className="flex justify-between items-center w-[50%] my-2 mx-1">
            <button
              id="negative-tracker"
              className="h-[40px] shadow-m hover:bg-gray-100 bg-gray-200 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.cpGreaterthanLp()
              }}
            >
              CP &gt; LP
            </button>
          </div>
          <div className="flex justify-between items-center w-[50%] my-2 mx-1">
            <button
              id="negative-tracker"
              className="h-[40px] shadow-m hover:bg-gray-100 bg-gray-200 rounded-lg font-bold w-[100%] border-2"
              onClick={() => {
                // change color
                props.cpLesserthanLp()
              }}
            >
              CP &lt; LP
            </button>
          </div>
        </div>

        <div className="text-gray-500 text-[13px]">
          CP : Current Price, LP: Listing Price, IP: Issue Price
        </div> */}
        <div className="w-[100%] h-[200px] bg-gray-200 rounded-lg flex flex-col justify-center items-center">
          <p className="text-secondary text-[25px] font-bold">COMING SOON</p>
          <p className="text-[12px]">Sneek peek: Live Current Price Feed :)</p>
        </div>

        <div className=" w-[100%] mx-auto my-2">
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
            className="w-[100%] h-[40px] p-1 outline-none border border-gray-600 rounded-md"
          >
            <option>All</option>
            {Sectors.map((sector) => {
              return <option key={sector}>{sector}</option>
            })}
          </select>
        </div>

        <div className=" w-[100%] mx-auto my-2">
          <label className=" h-[40px] flex items-center text-[15px]">
            IPOs with Listing Gain greater than {form.listing}%
          </label>
          <input
            className="w-[100%] h-[40px] p-1 outline-none border border-gray-600 rounded-lg"
            type="number"
            name="listing"
            placeholder="enter listing gain value(%)..."
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

{
  /* <div className="m-2">
            <label className="mr-[30p]">
              Listing price ({form.listingPrice})
            </label>
            <Box sx={{}}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 0 }}
                alignItems="left"
              >
                <Slider
                  aria-label="Volume"
                  value={form.listingPrice}
                  onChange={handleListingChange}
                />
              </Stack>
            </Box>
          </div>

          <div className="m-2">
            <label>Current price ({form.currentPrice})</label>
            <Box sx={{}}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 0 }}
                alignItems="left"
              >
                <Slider
                  aria-label="Volume"
                  value={form.currentPrice}
                  onChange={handleCurrentChange}
                />
              </Stack>
            </Box>
          </div>

          <div className="m-2">
            <label>Dayend price ({form.dayendPrice})</label>
            <Box sx={{}}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 0 }}
                alignItems="left"
              >
                <Slider
                  aria-label="Volume"
                  value={form.dayendPrice}
                  onChange={handleDayendChange}
                />
              </Stack>
            </Box>
          </div>

          <div className="mx-2">
            <label>Issue price ({form.issuePrice})</label>
            <Box sx={{}}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 0 }}
                alignItems="left"
              >
                <Slider
                  aria-label="Volume"
                  value={form.issuePrice}
                  onChange={handleIssueChange}
                />
              </Stack>
            </Box>
          </div> */
}
