import React from 'react'
import Image from 'next/image'
import { Cross } from '../../../../public/icons'
import $ from 'jquery'

export default function Filter() {
  return (
    <div
      id="filter"
      className="fixed z-50 custom-filter-panel hidden h-[100vh] bg-primary right-0"
    >
      <div className="w-[100%] flex justify-start items-center invert p-2 px-4">
        <Image
          className="cursor-pointer"
          onClick={() => {
            $('#filter').toggleClass('hidden')
          }}
          src={Cross}
          alt="X"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
