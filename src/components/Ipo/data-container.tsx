'use client'

import { RowDataType } from '../Home-Page/IPOData/ipodata.types'
import Filters from './filters'
import IpoCategory from './category'
import Table from './table'
import { useEffect, useState, useRef } from 'react'
import traverseData from '@/utils/traverseData'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DataContainer(props: {
  mainData: RowDataType[]
  smeData: RowDataType[]
}) {
  const isFirstRender = useRef(true)

  const [data, setData] = useState(props.mainData)
  const [dataType, setDataType] = useState('main')
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(19)

  async function updateData() {
    toast.loading('Fetching data ...')
    console.log(`start: ${start}, end: ${end}`)

    const newData = await traverseData(start, end, dataType)
    toast.dismiss()

    if (newData.success && newData.data) setData(newData.data)
    if (newData.success === false) {
      toast.error('Some error occurred')
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    updateData()
  }, [start, end])

  const toggleView = (type: string) => {
    if (type === 'main') {
      setData(props.mainData)
      setDataType('main')
    } else {
      setData(props.smeData)
      setDataType('sme')
    }
  }

  const search = (query: string) => {
    reset()
    const filteredData = data.filter((item) => {
      return item.name.includes(String(query))
    })
    setData(filteredData)
  }

  const reset = () => {
    if (dataType === 'main') {
      setData(props.mainData)
      setDataType('main')
    } else {
      setData(props.smeData)
      setDataType('sme')
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between items-center w-[100%] lg:w-[80%] mx-auto mt-[20px]">
        <div className="w-[40%] text-left">
          <IpoCategory callback={toggleView} />
        </div>

        <div className="w-[40%] text-right flex justify-end items-center">
          {start !== 0 && start > 0 && (
            <button
              className="w-[auto] px-4 mx-2 text-primary border font-bold rounded-md"
              onClick={() => {
                setStart(start <= 0 ? 0 : start - 19)
                setEnd(start !== 0 ? end - 19 : end)
              }}
            >
              Prev
            </button>
          )}
          {end <= 150 && (
            <button
              className="border w-[auto] px-4 mx-2 text-primary font-bold rounded-md"
              onClick={() => {
                setStart(end !== 150 ? start + 19 : start)
                setEnd(end >= 150 ? 150 : end + 19)
              }}
            >
              Next
            </button>
          )}

          <div className="hidden md:block">
            <Filters search={search} reset={reset} />
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[80%] mx-auto border">
        <Table data={data} />
      </div>

      <div className="block md:hidden">
        <Filters search={search} reset={reset} />
      </div>
    </>
  )
}
