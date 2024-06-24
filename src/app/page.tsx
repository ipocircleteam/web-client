import {
  HomeHero,
  IpoPreviewList,
  Banner,
  Products,
  Features,
  DocsPreview,
} from '@/components'
import { IpoPreviewProps } from '@/types/ipodata'
import { getIpoPreviewData } from '@/services/ipoService'
import Link from 'next/link'

async function fetchData(): Promise<IpoPreviewProps> {
  const { main, sme } = await getIpoPreviewData(7)
  return { main, sme }
}

export default async function Home() {
  const { main, sme } = await fetchData()

  return (
    <>
      <HomeHero />
      <div className="w-[98vw] sm:w-[90vw] md:w-[85vw] lg:w-[65vw] lgx:w-[50vw] mx-auto">
        <IpoPreviewList main={main} sme={sme} />
        <div
          className="text-secondary my-2 text-center w-[100%] mx-auto text-[18px] 
            hover:text-primary cursor-pointer"
        >
          <Link href="/ipo">See All</Link>
        </div>
      </div>
      <Banner />
      <Products />
      <Features />
      <DocsPreview />
    </>
  )
}
