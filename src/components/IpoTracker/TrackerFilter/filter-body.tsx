'use client'

import React, { useState } from 'react'
import FilterFooter from './filter-footer'

export default function FilterBody(props: {
  filter: (
    sector: string,
    year: number,
    price: number,
    p1: String,
    p2: String,
    op: String,
  ) => void
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
        <div className="flex justify-between items-center w-[100%] mx-auto my-2">
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
            className="w-[65%] h-[40px] p-1 outline-none border border-gray-600 rounded-md"
          >
            <option>All</option>
            <option>Pharmaceutical</option>
            <option>Technology</option>
            <option>Education</option>
            <option>Finance</option>
          </select>
        </div>

        {/* <div className="flex justify-between items-center w-[100%] mx-auto my-2">
          <label className=" h-[40px] flex items-center text-[1.1rem]">
            Year
          </label>
          <input
            className="w-[65%] h-[40px] p-1 outline-none border border-gray-600 rounded-lg"
            type="number"
            name="year"
            max={new Date().getFullYear()}
            value={form.year}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }}
          />
        </div> */}

        <div className="flex justify-between items-center w-[100%] mx-auto my-2">
          <label className=" h-[40px] flex items-center text-[15px]">
            Listing Gain(%)
          </label>
          <input
            className="w-[65%] h-[40px] p-1 outline-none border border-gray-600 rounded-lg"
            type="number"
            name="listing"
            value={form.listing}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }}
          />
        </div>

        {/* <div className="w-[100%] mx-auto my-[20px] border-t-2 px-1">
          <label className="mt-[10px] h-[40px] flex items-center text-[1rem]">
            Adjust parameters for comparative results
          </label>

          <select
            name="parameter1"
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }}
            className="w-[100%] h-[40px] my-[10px] p-1 outline-none border border-gray-600 rounded-md"
          >
            <option>Select parameter 1</option>
            <option>Listing Price</option>
            <option>Current Price</option>
            <option>Dayend Price</option>
            <option>Issue Price</option>
          </select>

          <select
            name="operator"
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }}
            className="w-[100%] h-[40px] my-[10px] p-1 outline-none border border-gray-600 rounded-md"
          >
            <option>Select comparator</option>
            <option>More than</option>
            <option>Same as</option>
            <option>Less than</option>
          </select>

          <select
            name="parameter2"
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }}
            className="w-[100%] h-[40px] my-[10px] p-1 outline-none border border-gray-600 rounded-md"
          >
            <option>Select parameter 2</option>
            <option>Current Price</option>
            <option>Dayend Price</option>
            <option>Listing Price</option>
            <option>Issue Price</option>
          </select>
        </div> */}
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
