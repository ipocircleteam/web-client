'use client'
import IpoTableComponent from './IpoTable'
import { IpoPreviewProps } from '@/types/ipodata'
import { useEffect, useState } from 'react'

const IpoListWithSearch = (props: IpoPreviewProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [data, setData] = useState<IpoPreviewProps>({
    main: props.main,
    sme: props.sme,
  })

  useEffect(() => {
    const mainboardFiltered = props.main.filter((item) => {
      return item.name.includes(searchQuery)
    })
    const smeFiltered = props.sme.filter((item) => {
      return item.name.includes(searchQuery)
    })
    setData(() => {
      return {
        main: mainboardFiltered,
        sme: smeFiltered,
      }
    })
  }, [searchQuery, props.main, props.sme])

  return (
    <>
      <div className="mt-2">
        <input
          className="border rounded-lg h-[45px] p-2 outline-none w-[100%] mx-auto"
          placeholder="Search Company/IPO"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <IpoTableComponent mainData={data.main} smeData={data.sme} />
    </>
  )
}

export default IpoListWithSearch
