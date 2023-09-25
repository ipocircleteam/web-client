'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { IpoTable } from '../Home-Page/IPOData/ipo-table'
import Table from './table'
import Filters from './filters'
import { RowDataType } from '../Home-Page/IPOData/ipodata.types'
import { mainipodata, smeipodata } from '@/dummydata'
import IpoCategory from '../Home-Page/IPOData/ipo-category'

export default function IpoDatabase() {
  const [mainData, setMainData] = useState<RowDataType[]>(mainipodata)
  const [smeData, setSmeData] = useState<RowDataType[]>(smeipodata)

  const [viewData, setViewData] = useState<RowDataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [type, setType] = useState('main')

  const toggleView = (name: string) => {
    setType(() => name)
  }

  const config = {
    headers: {
      Authorization: 'edb6f4ab-999d-4901-adc3-3e3376b7918b',
    },
  }

  useEffect(() => {
    if (type === 'main') {
      setViewData(mainData)
    } else {
      setViewData(smeData)
    }
  }, [type])

  useEffect(() => {
    setViewData(mainData)
  }, [mainData])

  useEffect(() => {
    const requests = [
      axios.get(
        'https://api.ipocircle.com/api/v0/ipo/details/filter?concise=true',
        config,
      ),
    ]

    Promise.all(requests)
      .then((responses) => {
        const arrayOfObjects = []
        const dataObject = responses[0].data

        for (let i = 0; i < Object.keys(dataObject).length; i++) {
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

        setMainData(arrayOfObjects)
        //setSmeData

        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetching data ', error)
        setLoading(false)
      })
  }, [])

  const search = (query: string) => {
    const filteredData = viewData.filter((item) => {
      return item.name.includes(String(query))
    })
    setViewData(filteredData)
  }

  const reset = () => {
    setViewData(mainData)
  }

  return (
    <div className="w-[95%] mx-auto mb-[20px]">
      <div className="flex flex-col mdlg:flex-row justify-between items-center mb-[20px]">
        <div>
          <h1 className="text-primary font-semibold text-[20px] mt-[10px] px-3">
            IPO Database
            <label className="w-[150px] mx-[10px] text-slate-500 font-normal text-[14px]">
              {loading ? '(Loading data ...)' : ''}
            </label>
          </h1>
        </div>
        <div className="">
          <Filters search={search} reset={reset} />
        </div>
      </div>
      <IpoCategory callback={toggleView} />

      <div className="w-[100%] border">
        {/* {viewData[0].name} */}
        <Table data={viewData} />
      </div>
    </div>
  )
}
