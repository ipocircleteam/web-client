'use client'

import React, { useEffect, useState } from 'react'
import CompanyDetails from './company-details'
import dotenv from 'dotenv'
dotenv.config()
import Content from './content'
import sanitizeIpoDetailsData from '@/utils/sanitizeDetailsData'
import Navigation from './navigation'
import { InitialDetailsData } from '../initial.data'
import axios from 'axios'
import { usePathname } from 'next/navigation'

export default function IPODetailsPage() {
  const [data, setData] = useState(InitialDetailsData)
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
      })
  }, [])

  return (
    <>
      <div className=" w-[100vw] container mx-auto ">
        <div className="bg-white w-[95vw] container mx-auto">
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
