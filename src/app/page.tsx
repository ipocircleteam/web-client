import HomeBanner from '@/components/Home/Banner/home-banner'
import Features from '@/components/Home/Features/features'
import Hero from '@/components/Home/Hero/hero'
import { IpoData } from '@/components/Home/IPOData'
import Products from '@/components/Home/Products'
import IpoStudy from '@/components/Home/IpoStudy/ipostudy'

export default async function Home() {
  return (
    <>
      <Hero />
      <IpoData />
      <HomeBanner />
      <Products />
      <Features />
      {/* <IpoStudy /> */}
    </>
  )
}
