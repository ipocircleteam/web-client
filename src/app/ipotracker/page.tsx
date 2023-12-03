import WebApp from './webapp'
import { trackerData } from '@/dummydata'

export default async function IpoTracker() {
  //  const dataResponse = await fetch(
  //   `https://api.ipocircle.com/api/v0/ipo/details/filter`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
  //     },
  //   },
  //  )

  // const data = await sanitizeData(dataResponse)

  return (
    <>
      <WebApp data={trackerData} />
    </>
  )
}
