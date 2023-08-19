'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Search } from '../../../../public/icons'

export default function SearchBar(props: { darkMode: boolean }) {
  const [searchQuery, setSearchQuery] = useState('')

  const searchCompany = () => {
    alert('clicked')
  }

  return (
    <div className="flex justify-center items-center w-[100%]">
      <input
        type="text"
        placeholder="Search company"
        className="p-2 bg-primary rounded-l-lg h-[40px] outline-none text-gray-400 w-[100%]"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e?.target.value)
        }}
      />
      <button
        onClick={searchCompany}
        className="p-2 bg-primary rounded-r-lg h-[40px] outline-none"
      >
        <Image
          className={(props.darkMode ? ' invert-[0.5]' : '') + ' mx-auto'}
          width={20}
          height={20}
          src={Search}
          alt="Search"
        />
      </button>
    </div>
  )
}
