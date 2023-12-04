import Banner from './banner'
import GmpOverview from './gmpOverview'
import WebApp from './webapp'
import { trackerData } from '@/dummydata'
import sanitizeData from '@/utils/prepareData'

export default async function IpoTracker() {
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tracker/details?year=2023`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const res = await dataResponse.json()

  return (
    <div className="w-[100vw] mx-auto container">
      <Banner />
      <GmpOverview />
      <WebApp data={res.data} />
    </div>
  )
}
