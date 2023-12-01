import { mainipodata, smeipodata } from '@/dummydata'
import DataContainer from './data-container'

export default async function IpoDatabase() {
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
    <div className="w-[95%] mb-[20px] mx-auto container">
      <div className=" mb-[20px]">
        <div>
          <h1 className="text-primary font-semibold text-[20px] mt-[10px] px-3">
            IPO Database
          </h1>
        </div>
        <DataContainer mainData={mainipodata} smeData={smeipodata} />
      </div>
    </div>
  )
}
