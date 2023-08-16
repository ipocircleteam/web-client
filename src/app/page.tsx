import Articles from '@/components/Home-Page/Articles/article-preview'
import HomeBanner from '@/components/Home-Page/Banner/home-banner'
import Features from '@/components/Home-Page/Features/features'
import Footer from '@/components/Footer/footer'
import Hero from '@/components/Home-Page/Hero/hero'
import { IpoData } from '@/components/Home-Page/IPOData/ipo-data'
import Keto from '@/components/Home-Page/Keto/keto'
import Menu from '@/components/Menu/menu'
import Products from '@/components/Home-Page/Products/products'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="../../public/logo/logo5.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Menu />
      <Hero />
      <IpoData />
      <HomeBanner />
      <Products />
      <Features />
      <Articles />
      <Keto />
      <Footer />
    </>
  )
}
