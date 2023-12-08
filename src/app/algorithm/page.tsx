'use client'

import Menu from '@/components/Menu/menu'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import Result from '@/components/Algorithm/result'
import Footer from '@/components/Footer/footer'
import HelpGuide from '@/components/Algorithm/help-guide'
import Products from '@/components/Home-Page/Products/products'
import Image from 'next/image'
import { AlgoPeek } from '../../../public/images'

export default function Consultation() {
  const [form, setForm] = useState({
    amount: 0,
    dematAccounts: 0,
    riskProfile: 0,
  })

  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleRiskChange = (event: Event, newValue: number | number[]) => {
    setForm({
      ...form,
      riskProfile: newValue as number,
    })
  }

  const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function scrollToDiv(targetId: string) {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID "${targetId}" not found.`)
    }
  }

  const runAlgorithm = () => {
    setLoading(true)
    axios
      .post('/', {
        data: form,
      })
      .then((response) => {
        //setResult(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error running algorithm, ', error)
        setResult('Sorry! Some Error Occurred')
        setLoading(false)
      })
    scrollToDiv('algoResult')
  }

  return (
    <>
      <div className="mx-auto container max-w-9xl">
        <div className="bg-primary p-3 text-white h-[300px] flex justify-center items-center">
          <span className="text-center">
            <h1 className="font-bold text-[2.5rem] md:text-[3rem]">MAVERICK</h1>
            <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
              Algorithm guided and data backed IPO investments
            </p>
            <span>
              <button
                onClick={() => {
                  scrollToDiv('helpGuide')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                How it works?
              </button>
              <button
                onClick={() => {
                  scrollToDiv('algoTool')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                Let&apos;s go
              </button>
            </span>
          </span>
        </div>

        <div
          id="algoTool"
          className="text-center flex flex-col justify-center items-center mt-[30px]"
        >
          <div className="border rounded-lg p-7">
            <p>We are currently testing our algo, it will be live soon</p>
            <h1 className="text-[35px] mb-[20px] font-bold text-secondary">
              COMING SOON
            </h1>
          </div>
          <div className="my-[20px] w-[100%]">
            <h1 className="my-[10px]">What&apos;s cooking?</h1>
            <div className="w-[95%] md:w-[70%] lg:w-[60%] border rounded-lg mx-auto shadow-md p-4">
              <p className="w-[90%] lg:w-[80%] mx-auto my-[20px]">
                Introducing our advanced IPO Suggestion Algorithm at IPO Circle!
                Seamlessly integrating risk profiling, allotment probabilities,
                and profit/loss expectations, this algorithm guides you through
                a curated sequence of IPOs, optimizing your investment strategy
                for success. Elevate your IPO experience with data-driven
                precision.
              </p>
              <Image src={AlgoPeek} alt="" />
            </div>
          </div>

          <Products />
          {/* <label className="text-primary text-[1.2rem] font-bold mb-[20px]">
            Please enter following details
          </label>
          <div className="flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[80%]">
            <span className="w-[95%] md:w-[45%] flex flex-col">
              <label className="text-left">Available Amount(Rs.)</label>
              <input
                className="h-[40px] border outline-none m-2 p-2"
                type="number"
                name="amount"
                placeholder="Available amount"
                value={form.amount}
                onChange={handleinputChange}
              />
              <label className="text-left">
                No of available demat accounts
              </label>
              <input
                className="h-[40px] border outline-none m-2 p-2"
                type="number"
                name="dematAccounts"
                placeholder="No. of demat accounts available"
                value={form.dematAccounts}
                onChange={handleinputChange}
              />
            </span>

            <span className="w-[95%] md:w-[45%] flex flex-col">
              <div className="text-left">
                Select your risk profile:{'  '}
                <label className="font-bold">
                  {form.riskProfile < 35
                    ? 'LOW'
                    : form.riskProfile > 35 && form.riskProfile < 85
                    ? 'MED'
                    : 'HIGH'}
                </label>
              </div>
              <>
                <Box sx={{}}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <Slider
                      aria-label="Volume"
                      value={form.riskProfile}
                      onChange={handleRiskChange}
                    />
                  </Stack>
                </Box>
              </>
            </span>
          </div>
          <button
            onClick={runAlgorithm}
            className="border bg-primary hover:bg-blue-500 text-white font-bold w-[100px] p-2 rounded-lg my-[20px]"
          >
            RUN
          </button> */}
        </div>

        {/* <Result result={result} loading={loading} />
        <HelpGuide /> */}
      </div>
    </>
  )
}
