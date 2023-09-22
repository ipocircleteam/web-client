import React from 'react'
import Image from 'next/image'
import { Cross } from '../../../../public/icons'
import $ from 'jquery'

export default function FilterHeader() {
  return (
    <div className="w-[100%] flex justify-start items-center p-2 px-4">
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
  )
}
