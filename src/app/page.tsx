'use client'

import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import axios from 'axios'

import Articles from '@/components/Home-Page/Articles/article-preview'
import HomeBanner from '@/components/Home-Page/Banner/home-banner'
import Features from '@/components/Home-Page/Features/features'
import Footer from '@/components/Footer/footer'
import Hero from '@/components/Home-Page/Hero/hero'
import { IpoData } from '@/components/Home-Page/IPOData/ipo-data'
import Menu from '@/components/Menu/menu'
import Products from '@/components/Home-Page/Products/products'
import Head from 'next/head'
import IpoStudy from '@/components/Home-Page/IpoStudy/ipostudy'
import { mainipodata, smeipodata } from '@/dummydata'

export default function Home() {
  const [mainIpoData, setMainIpoData] = useState(mainipodata)
  const [smeIpoData, setSmeIpoData] = useState(smeipodata)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const requests = [axios.post('/'), axios.post('/')]
    Promise.all(requests)
      .then((responses) => {
        console.log(responses[0].data)
        console.log(responses[1].data)

        setMainIpoData(responses[0].data)
        setSmeIpoData(responses[1].data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetching data ', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="../../public/logo/logo5.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Menu />
        <Hero />
        <IpoData
          mainData={mainIpoData}
          smeData={smeIpoData}
          loading={loading}
        />
        <HomeBanner />
        <Products />
        <Features />
        <IpoStudy />
        <Articles />
        {/* <Keto /> */}
        <Footer />
      </Provider>
    </>
  )
}
