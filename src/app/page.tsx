import HomwBanner from '@/components/Banner/home-banner'
import Hero from '@/components/Hero/hero'
import { IpoData } from '@/components/IPOData/ipo-data'
import Menu from '@/components/Menu/menu'

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <IpoData />
      <HomwBanner />
    </>
  )
}
