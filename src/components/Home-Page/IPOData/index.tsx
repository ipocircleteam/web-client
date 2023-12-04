import Link from 'next/link'
import DataContainer from './data-container'
import sanitizeData from '@/utils/prepareData'
import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()

export async function IpoData() {
  var sme
  // const smeDataResponse = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=sme&count=7`, // replace sme url
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':
  //         'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  //     },
  //   },
  // )
  // console.log(smeDataResponse)
  var main
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=sme&count=7`,
    )
    .then(async (res) => {
      sme = res.data.data
    })

  // const sme = await smeDataResponse.json()

  // const mainDataResponse = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=eq&count=7`, // replace main url
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  //     },
  //   },
  // )
  // const main = await mainDataResponse.json()
  var main
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=eq&count=7`,
    )
    .then(async (res) => {
      main = res.data.data
    })

  // formatting response
  const smeData = await sanitizeData(sme, 7)
  const mainData = await sanitizeData(main, 7)

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
