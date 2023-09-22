'use client'

import React, { useState } from 'react'
import FilterFooter from './filter-footer'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'

export default function FilterBody() {
  const [form, setForm] = useState({
    sector: '',
    year: 0,
    listingPrice: 0,
    currentPrice: 0,
    dayendPrice: 0,
    issuePrice: 0,
  })

  const handleListingChange = (event: Event, newValue: number | number[]) => {
    setForm({
      ...form,
      listingPrice: newValue as number,
    })
  }

  const handleCurrentChange = (event: Event, newValue: number | number[]) => {
    setForm({
      ...form,
      currentPrice: newValue as number,
    })
  }

  const handleDayendChange = (event: Event, newValue: number | number[]) => {
    setForm({
      ...form,
      dayendPrice: newValue as number,
    })
  }

  const handleIssueChange = (event: Event, newValue: number | number[]) => {
    setForm({
      ...form,
      issuePrice: newValue as number,
    })
  }

  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-start p-2 px-4">
        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className=" h-[30px] flex items-center text-[1.1rem]">
            Sector
          </label>
          <select className="w-[70%] h-[30px] p-1 outline-none border border-gray-600 rounded-md">
            <option>All</option>
            <option>Pharma</option>
            <option>IT</option>
            <option>Edtech</option>
            <option>Fintech</option>
          </select>
        </div>

        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className=" h-[30px] flex items-center text-[1.1rem]">
            Year
          </label>
          <input
            className="w-[70%] h-[30px] p-1 outline-none border border-gray-600 rounded-lg"
            type="number"
            max={new Date().getFullYear()}
            value={new Date().getFullYear()}
          />
        </div>

        <div className="flex justify-between items-center w-[90%] mx-auto my-2">
          <label className=" h-[30px] flex items-center text-[1.1rem]">
            Listing Price
          </label>
          <input
            placeholder="0"
            className="w-[70%] h-[30px] p-1 outline-none border border-gray-600 rounded-lg"
            type="number"
          />
        </div>

        <div className="w-[100%] mx-auto mt-[30px] border-t-2">
          <label className=" h-[30px] flex items-center text-[1.1rem]">
            Adjust parameters for graphical comparison
          </label>

          <div className="m-2">
            <label className="mr-[30px]">
              Listing price ({form.listingPrice})
            </label>
            <Box sx={{ width: 500 }}>
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
            <Box sx={{ width: 500 }}>
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
            <Box sx={{ width: 500 }}>
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

          <div className="m-2">
            <label>Issue price ({form.issuePrice})</label>
            <Box sx={{ width: 500 }}>
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
          </div>
        </div>
      </div>
      <FilterFooter />
    </>
  )
}

{
  /* <section className="flex justify-between items-start">
            <select className="w-[30%] h-[50px]  p-2 outline-none border border-gray-600 rounded-lg">
              <option>Listing Price</option>
              <option>Current Price</option>
              <option>Dayend Price</option>
              <option>Issue Price</option>
            </select>
            <select className="w-[30%] h-[50px]  p-2 outline-none border border-gray-600 rounded-lg">
              <option>More than</option>
              <option>Equal to</option>
              <option>Less than</option>
            </select>
            <select className="w-[30%] h-[50px]  p-2 outline-none border border-gray-600 rounded-lg">
              <option>Current Price</option>
              <option>Listing Price</option>
              <option>Dayend Price</option>
              <option>Issue Price</option>
            </select>
          </section> */
}
