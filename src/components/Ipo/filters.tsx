import Image from 'next/image'
import React from 'react'
import { Search } from '../../../public/icons'

export default function Filters() {
  return (
    <>
      <div className="overflow-hidden border h-[30px] w-[100%] flex justify-center items-center">
        <input
          className="w-[90%] h-[25px] outline-none px-1 text-primary"
          type="text"
          placeholder="Search an IPO"
        />
        <button className="w-[10%] h-[25px]">
          <Image height={20} src={Search} alt="Search" />
        </button>
      </div>

      <div className="mt-[10px] text-primary flex flex-col justify-start items-start">
        {/* YEAR WISE FILTER */}
      </div>
    </>
  )
}
