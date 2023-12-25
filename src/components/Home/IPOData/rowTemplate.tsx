'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RowDataType } from '../../../lib/types/ipodata.types'
import useWindowWidth from '@/hooks/useWindowWidth'
import { RightArrow } from '../../../../public/icons'
import Closetag from './closetag'

export default function TableRow(props: {
  data: RowDataType
  scaling: boolean
}) {
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
    const endDate = props.data.enddate.substring(0, 10)
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
          <Link href={`/ipo/${props.data.ipoID}`}>{props.data.name + ''}</Link>
          {isIpoClosingToday() && <Closetag width={width} />}
        </div>
      </td>

      <td className="w-[12.5%]">{props.data.opendate.substring(0, 10)}</td>

      <td className="w-[12.5%]">{props.data.enddate.substring(0, 10)}</td>

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
