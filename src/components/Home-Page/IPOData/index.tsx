import Link from 'next/link'
import DataContainer from './data-container'
import sanitizeData from '@/utils/prepareData'

import dotenv from 'dotenv'
dotenv.config()

export async function IpoData() {
  const smeDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=sme&count=7`, // replace sme url
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const sme = await smeDataResponse.json()

  const mainDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=eq&count=7`, // replace main url
    {
      method: 'GET',
    },
  )
  const main = await mainDataResponse.json()

  // formatting response
  const smeData = await sanitizeData(sme.data, 7)
  const mainData = await sanitizeData(main.data, 7)

  return (
    <div className="mt-[3rem] text-center container mx-auto max-w-9xl ">
      <DataContainer smeData={smeData} mainData={mainData} />
      <div
        className="text-secondary my-2 text-center w-[100%] mx-auto text-[18px] 
            hover:text-primary cursor-pointer"
      >
        <Link href="/ipo">See All</Link>
      </div>
    </div>
  )
}

function Symbols() {
  return (
    <div className="w-[90vw] mx-auto flex justify-center items-center">
      <span className="mx-2 flex justify-center items-center">
        <div className="bg-yellow-500 custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-yellow-500">Upcoming</label>
      </span>

      <span className="mx-2 flex justify-center items-center">
        <div className="bg-secondary custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-green-500">Live</label>
      </span>

      <span className="mx-2 flex justify-center items-center">
        <div className="bg-red-500 custom-animate-ping w-[10px] h-[10px] rounded-full"></div>
        <label className="text-red-500">Closed</label>
      </span>
    </div>
  )
}
