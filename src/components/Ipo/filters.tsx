import Image from 'next/image'
import React from 'react'
import { Search } from '../../../public/icons'

export default function Filters() {
  return (
    <>
      <div className="overflow-hidden border h-[30px] w-[100%] flex justify-center items-center">
        <input
          className="w-[90%] h-[25px] outline-none px-1"
          type="text"
          placeholder="Search an IPO"
        />
        <button className="w-[10%] h-[25px]">
          <Image height={20} src={Search} alt="Search" />
        </button>
      </div>
    </>
  )
}
