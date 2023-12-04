import HomeBanner from '@/components/Home-Page/Banner/home-banner'
import Features from '@/components/Home-Page/Features/features'
import Hero from '@/components/Home-Page/Hero/hero'
import { IpoData } from '@/components/Home-Page/IPOData'
import Products from '@/components/Home-Page/Products/products'
import IpoStudy from '@/components/Home-Page/IpoStudy/ipostudy'

export default async function Home() {
  return (
    <>
      <Hero />
      <IpoData />
      <HomeBanner />
      <Products />
      <Features />
      <IpoStudy />
    </>
  )
}
