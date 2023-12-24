import Banner from '../../components/IpoTracker/banner'
import GmpOverview from '../../components/IpoTracker/gmpOverview'
import WebApp from '../../components/IpoTracker/webapp'
import { trackerData } from '@/dummydata'
import sanitizeData from '@/lib/functions/prepareData'

export default async function IpoTracker() {
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tracker/detailsWithSeries`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    },
  )

  const res = await dataResponse.json()

  const all = res.data.all
  const main = res.data.main
  const sme = res.data.sme

  return (
    <div className="w-[100vw] mx-auto container">
      <Banner />
      <GmpOverview />
      <WebApp data={all} main={main} sme={sme} />
    </div>
  )
}
