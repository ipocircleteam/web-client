'use client'
import React, { useState } from 'react'
import { IpoTable } from '../Home-Page/IPOData/ipo-table'
import Table from './table'
import Filters from './filters'
import { mainipodata } from '@/dummydata'

export default function IpoDatabase() {
  const [data, setData] = useState(mainipodata)

  const search = (query: string) => {
    const filteredData = mainipodata.filter((item) => {
      return item.name.includes(String(query))
    })
    setData(filteredData)
  }

  const reset = () => {
    setData(mainipodata)
  }

  return (
    <div className="w-[95%] mx-auto mb-[20px]">
      <div className="flex flex-col mdlg:flex-row justify-between items-center mb-[20px]">
        <div>
          <h1 className="text-primary font-semibold text-[20px] mt-[10px] px-3">
            IPO Database
          </h1>
        </div>
        <div className="">
          <Filters search={search} reset={reset} />
        </div>
      </div>

      <div className="w-[100%] border">
        <Table data={data} />
      </div>
    </div>
  )
}
