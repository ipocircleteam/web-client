'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Search } from '../../../../public/icons'

export default function SearchBar(props: {
  query: string
  setQuery: (q: string) => void
  search: (name: string) => void
}) {
  const searchCompany = () => {
    props.search(props.query)
  }

  return (
    <div className="flex justify-center items-center w-[100%] my-[10px]">
      <input
        type="text"
        placeholder="Search company"
        className="p-2 rounded-l-lg border h-[40px] outline-none text-gray-600 w-[100%]"
        value={props.query}
        onChange={(e) => {
          props.setQuery(e?.target.value)
        }}
      />
      <button
        onClick={searchCompany}
        className="p-2 rounded-r-lg h-[40px] outline-none border border-l-0"
      >
        <Image
          className=" mx-auto"
          width={20}
          height={20}
          src={Search}
          alt="Search"
        />
      </button>
    </div>
  )
}
