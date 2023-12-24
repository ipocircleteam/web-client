'use client'

import React, { useEffect, useState } from 'react'
import CompanyDetails from '../../../components/IpoDetails/company-details'
import dotenv from 'dotenv'
dotenv.config()
import Content from '../../../components/IpoDetails/content'
import sanitizeIpoDetailsData from '@/lib/functions/sanitizeDetailsData'
import Navigation from '../../../components/IpoDetails/navigation'
import { InitialDetailsData } from '../initial.data'
import axios from 'axios'
import { redirect, usePathname } from 'next/navigation'
import Image from 'next/image'
import { LogoIcon } from '../../../../public/logo'

export default function IPODetailsPage() {
  const [data, setData] = useState(InitialDetailsData)
  const [loading, setLoading] = useState(true)
  const path = usePathname()
  const url: string | undefined = path?.substring(5)
  // @ts-ignore
  const ipoId = decodeURIComponent(url.replace(/\%20/g, ' '))

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/ipo/details/id?id=${ipoId}`)
      .then(async (res) => {
        const formattedData = await sanitizeIpoDetailsData(res.data)
        setData(formattedData)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [ipoId])

  return (
    <>
      {loading === true && (
        <div className="fixed top-0 bg-gray-500 bg-opacity-30 flex justify-center items-center w-[100vw] h-[100vh]">
          <LoadingUi />
        </div>
      )}
      <div className=" w-[100vw] container mx-auto ">
        <div className="bg-white w-[95%] md:w-[90%] lg:w-[85%] container mx-auto">
          <div className="w-[100%] mx-auto container bg-white mb-[20px]">
            <CompanyDetails data={data.CompanyDetailsData} />
            <hr />
            <Navigation />
            <hr />
          </div>
          <Content data={data} />
        </div>
      </div>
    </>
  )
}

function LoadingUi() {
  return (
    <section className="mb-[450px] flex justify-center flex-col items-center">
      <div className="loader w-[100px]">
        <Image src={LogoIcon} alt="" />
      </div>
      <p className="text-white font-bold text-[25px]">Loading data...</p>
    </section>
  )
}
