'use client'

import { RowDataType } from '../Home-Page/IPOData/ipodata.types'
import Filters from './filters'
import IpoCategory from '../Home-Page/IPOData/ipo-category'
import Table from './table'
import { useState } from 'react'

export default function DataContainer(props: {
  mainData: RowDataType[]
  smeData: RowDataType[]
}) {
  const [data, setData] = useState(props.mainData)

  const toggleView = (type: string) => {
    if (type === 'main') setData(props.mainData)
    else setData(props.smeData)
  }

  const search = (query: string) => {
    const filteredData = data.filter((item) => {
      return item.name.includes(String(query))
    })
    setData(filteredData)
  }

  const reset = () => {
    setData(props.mainData)
  }

  return (
    <>
      <div className="flex justify-end">
        <Filters search={search} reset={reset} />
      </div>
      <IpoCategory callback={toggleView} />

      <div className="w-[100%] lg:w-[80%] mx-auto border">
        <Table data={data} />
      </div>
    </>
  )
}
