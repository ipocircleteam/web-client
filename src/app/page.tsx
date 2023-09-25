'use client'

//TODO shift the fetching logic to IpoTable Component and make it a server component

import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import axios from 'axios'
import dotenv from 'dotenv'
import { RowDataType } from '@/components/Home-Page/IPOData/ipodata.types'

dotenv.config()

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
  const [mainData, setMainData] = useState<RowDataType[]>([])
  const [smeData, setSmeData] = useState<RowDataType[]>(smeipodata)
  const [viewData, setViewData] = useState<RowDataType[]>([])
  const [loading, setLoading] = useState(true)

  const config = {
    headers: {
      Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
    },
  }

  useEffect(() => {
    setViewData(mainData)
  }, [mainData])

  useEffect(() => {
    const requests = [
      axios.get(
        `https://api.ipocircle.com/api/v0/ipo/details/filter?concise=true`,
        config,
      ),
    ]
    Promise.all(requests)
      .then((responses) => {
        const arrayOfObjects = []
        const dataObject = responses[0].data

        for (let i = 0; i < 7; i++) {
          const openDate = new Date(dataObject[i].opening_date)
          const closeDate = new Date(dataObject[i].closing_date)
          const currentDate = new Date()
          let status = 'Closed'
          if (openDate < currentDate && closeDate > currentDate) status = 'Live'
          else if (openDate > currentDate && closeDate > currentDate)
            status = 'Upcoming'

          const object = {
            sno: i + 1,
            ipoID: dataObject[i].id,
            name: dataObject[i].name,
            opendate:
              dataObject[i].opening_date === undefined
                ? ''
                : dataObject[i].opening_date,
            enddate:
              dataObject[i].closing_date === undefined
                ? ''
                : dataObject[i].closing_date,
            status: status,
          }
          arrayOfObjects.push(object)
        }
        console.log(arrayOfObjects)
        setMainData(arrayOfObjects)
        //setSmeData

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
        <IpoData mainData={mainData} smeData={viewData} loading={loading} />
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
