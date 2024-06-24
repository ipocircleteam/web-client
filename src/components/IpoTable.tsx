'use client'

import { useState, useEffect } from 'react'
import { IpoWithStatus } from '../types/ipodata'
import useWindowWidth from '@/hooks/useWindowWidth'
import Link from 'next/link'
import $ from 'jquery'

export default function IpoTableComponent(props: {
  mainData: IpoWithStatus[]
  smeData: IpoWithStatus[]
}) {
  const [data, setData] = useState(props.mainData)

  function setIpoCategory(type: string) {
    const isMain = type === 'main'

    setData(isMain ? props.mainData : props.smeData)
    const $main = $('#main')
    const $sme = $('#sme')

    // Update classes based on the type
    $main.toggleClass('shift-view', isMain)
    $main.toggleClass('hover:bg-blue-50', !isMain)

    $sme.toggleClass('shift-view', !isMain)
    $sme.toggleClass('hover:bg-blue-50', isMain)
  }

  return (
    <div>
      <div className="w-[100%] mx-auto flex justify-center items-center">
        <button
          id="main"
          className="shift-view m-2 h-[30px] px-2 rounded-md text-primary"
          onClick={() => {
            setIpoCategory('main')
          }}
        >
          Mainboard
        </button>

        <button
          id="sme"
          className=" m-2 h-[30px] px-2 rounded-md text-primary hover:bg-blue-50"
          onClick={() => {
            setIpoCategory('sme')
          }}
        >
          SME
        </button>
      </div>
      <Table data={data} />
    </div>
  )
}

function Table(props: { data: IpoWithStatus[] }) {
  return (
    <div className="w-[100%] mx-auto mt-2 rounded-md border overflow-hidden">
      <table className="text-center w-[100%]">
        <tr className="w-[100%] p-4 text-[13px] lg:text-[15px] font-semibold text-grey-500 custom-tablerow">
          <td className="w-[10%]">#</td>
          <td className="w-[25%] text-left">IPO Name</td>
          <td className="w-[17.5%]">Open</td>
          <td className="w-[17.5%]">Close</td>
          <td className="w-[10%]">Status</td>
        </tr>

        {props.data.map((item) => {
          return <TableRow key={item.sno} data={item} scaling={false} />
        })}
      </table>
    </div>
  )
}

function TableRow(props: { data: IpoWithStatus; scaling: boolean }) {
  const width = useWindowWidth()

  const statusClass =
    props.data.status === 'Live'
      ? 'text-green-500'
      : props.data.status === 'Upcoming'
      ? 'text-yellow-500'
      : 'text-red-500'

  const blinkClass =
    (props.data.status === 'Live'
      ? 'bg-secondary custom-animate-ping'
      : props.data.status === 'Upcoming'
      ? 'bg-yellow-500'
      : 'bg-red-500') + ' w-[10px] h-[10px] mr-2 rounded-full'

  const isIpoClosingToday = (): boolean => {
    const endDate = new Date(props.data.closing_date)
      .toString()
      .substring(0, 10)
    const currDate = new Date().toISOString().substring(0, 10)
    if (endDate === currDate) return true
    return false
  }

  return (
    <tr
      className={
        'w-[100%] ' +
        (props.scaling === true ? 'scaling-transition' : '') +
        ' p-4 text-primary custom-tablerow text-[13px] md:text-[1.1rem]'
      }
    >
      <td className="w-[10%]">{props.data.sno}</td>

      <td title="See details" className="w-[30%] text-left cursor-pointer">
        <div className="m-0 p-0 flex justify-start items-center">
          <Link href={`/ipo/${props.data.ipo_id}`}>
            {props.data.name.split('IPO ')[0] + ''}
          </Link>
          {isIpoClosingToday() && <Closetag width={width} />}
        </div>
      </td>

      <td className="w-[12.5%]">
        {new Date(props.data.opening_date).toString().substring(3, 15)}
      </td>

      <td className="w-[12.5%]">
        {new Date(props.data.closing_date).toString().substring(3, 15)}
      </td>

      <td className={statusClass + ' w-[10%] '}>
        <div className="m-0 p-0 flex justify-center items-center text-[12px] md:text-[15px]">
          {props.data.status}
        </div>
      </td>
    </tr>
  )
}

function Blink(props: { blinkClass: string }) {
  return <div className={props.blinkClass}></div>
}

function Closetag(props: { width: number | undefined }) {
  return (
    <div className="flex items-center justify-center rounded-lg">
      {props.width && props.width > 600 ? (
        <label className="text-center w-[100px] text-[12px] border border-red-500 text-red-500 ml-2 px-[3px] rounded-lg">
          Closing Today
        </label>
      ) : (
        <label className="text-center text-white px-[3px] rounded-full ml-1 bg-red-500 font-semibold text-[8px]">
          Closing
        </label>
      )}
    </div>
  )
}
