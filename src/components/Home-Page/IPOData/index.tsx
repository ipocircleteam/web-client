import Link from 'next/link'
import sanitizeData from '@/utils/prepareData'
import DataContainer from './data-container'
import { mainipodata, smeipodata } from '@/dummydata'

export async function IpoData() {
  // const smeDataResponse = await fetch(
  //   `https://api.ipocircle.com/api/v0/ipo/details/filter?concise=true`, // replace sme url
  //   {
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
  //     },
  //   },
  // )

  // const mainDataResponse = await fetch(
  //   `https://api.ipocircle.com/api/v0/ipo/details/filter?concise=true`, // replace main url
  //   {
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
  //     },
  //   },
  // )

  // const smeData = await sanitizeData(smeDataResponse)
  // const mainData = await sanitizeData(mainDataResponse)

  return (
    <div className="mt-[3rem] text-center container mx-auto max-w-9xl ">
      <DataContainer smeData={smeipodata} mainData={mainipodata} />
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
