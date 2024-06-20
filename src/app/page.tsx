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

async function fetchData(): Promise<IpoPreviewProps> {
  const { main, sme } = await getIpoPreviewData(7)
  return { main, sme }
}

export default async function Home() {
  const { main, sme } = await fetchData()

  return (
    <>
      <HomeHero />
      <IpoPreviewList main={main} sme={sme} />
      <Banner />
      <Products />
      <Features />
      <DocsPreview />
    </>
  )
}
