'use client'

import React from 'react'
import { RowDataType } from './ipodata.types'
import useWindowWidth from '@/hooks/useWindowWidth'
import Image from 'next/image'
import { RightArrow } from '../../../../public/icons'

export default function TableRow(props: {
  data: RowDataType
  scaling: boolean
}) {
  const width = useWindowWidth()

  const openIpoPage = () => {
    window.location.replace('/ipo/' + props.data.ipoID)
  }

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

  return (
    <tr
      className={
        'w-[100%] ' +
        (props.scaling === true ? 'scaling-transition' : '') +
        ' p-4 text-primary custom-tablerow text-[13px] md:text-[1.1rem]'
      }
      // onClick={openIpoPage}
    >
      <td className="w-[10%]">{props.data.sno}</td>

      <td title="See details" className="w-[30%] text-left cursor-pointer">
        <div className="m-0 p-0 flex justify-start items-center">
          <a className="w-[100%]" href={'/ipo/' + props.data.ipoID}>
            {props.data.name + ''}
          </a>
          {Number(props.data.enddate.substring(0, 2)) ===
          new Date().getDate() ? (
            <Closetag width={width} />
          ) : (
            ''
          )}
        </div>
      </td>

      <td className="w-[12.5%]">{props.data.opendate.substring(0, 10)}</td>

      <td className="w-[12.5%]">{props.data.enddate.substring(0, 10)}</td>

      <td className={statusClass + ' w-[10%] '}>
        <div className="m-0 p-0 flex justify-center items-center">
          {width && width > 600 ? (
            <>
              {props.data.status === 'Live' ? (
                <Blink blinkClass={blinkClass} />
              ) : (
                ''
              )}
              {props.data.status}
            </>
          ) : (
            <Blink blinkClass={blinkClass} />
          )}
        </div>
      </td>

      <td className="w-[5%] cursor-pointer">
        <button
          title="See more"
          className=" text-primary cursor-pointer flex items-center justify-center m-1 w-[30px] h-[20px] rounded-sm"
        >
          <a className="w-[100%]" href={'/ipo/' + props.data.ipoID}>
            <Image
              title="See more"
              className=" text-primary flex items-center justify-center m-1 
        w-[30px] h-[20px] rounded-sm hover:translate-x-1"
              src={RightArrow}
              alt="->"
              height={15}
              width={15}
            />
          </a>
        </button>
      </td>
    </tr>
  )
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

function Blink(props: { blinkClass: string }) {
  return <div className={props.blinkClass}></div>
}
