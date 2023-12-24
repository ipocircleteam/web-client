import sanitizeData from '@/lib/functions/prepareData'
import DataContainer from './data-container'
import dotenv from 'dotenv'
dotenv.config()

export default async function IpoDatabase() {
  const smeDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=sme&start=0&end=19`, // replace sme url
    {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    },
  )
  const sme = await smeDataResponse.json()

  const mainDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ipo/details?concise=true&type=eq&start=0&end=19`, // replace main url
    {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    },
  )
  const main = await mainDataResponse.json()

  const smeData = await sanitizeData(sme.data, 19)
  const mainData = await sanitizeData(main.data, 19)

  return (
    <div className="w-[95%] mb-[20px] mx-auto container">
      <div className=" mb-[20px]">
        <div>
          <h1 className="text-primary font-semibold text-[20px] mt-[10px] px-3">
            IPO Database
          </h1>
        </div>
        <DataContainer mainData={mainData} smeData={smeData} />
      </div>
    </div>
  )
}
