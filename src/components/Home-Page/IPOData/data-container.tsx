'use client'

import { useState } from 'react'

import IpoCategory from './ipo-category'
import { IpoTable } from './ipo-table'
import { RowDataType } from './ipodata.types'

export default function DataContainer(props: {
  mainData: RowDataType[]
  smeData: RowDataType[]
}) {
  const [data, setData] = useState(props.mainData)

  function toggleView(type: string) {
    if (type === 'main') setData(props.mainData)
    else setData(props.smeData)
  }
  return (
    <>
      <IpoCategory callback={toggleView} />
      <IpoTable data={data} />
    </>
  )
}
