import dotenv from 'dotenv'
dotenv.config()

import Articles from '@/components/Home-Page/Articles/article-preview'
import HomeBanner from '@/components/Home-Page/Banner/home-banner'
import Features from '@/components/Home-Page/Features/features'
import Footer from '@/components/Footer/footer'
import Hero from '@/components/Home-Page/Hero/hero'
import { IpoData } from '@/components/Home-Page/IPOData'
import Menu from '@/components/Menu/menu'
import Products from '@/components/Home-Page/Products/products'
import Head from 'next/head'
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
