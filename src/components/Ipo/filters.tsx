import Image from 'next/image'
import React, { useState } from 'react'
import { Search } from '../../../public/icons'

export default function Filters(props: {
  search: (query: string) => void
  reset: () => void
}) {
  const [query, setQuery] = useState('')

  return (
    <>
      <div className="overflow-hidden border h-[30px] w-[300px] flex justify-start mdlg:justify-between items-start mdlg:items-center">
        <input
          className="w-[90%] h-[25px] outline-none px-1 text-primary"
          type="text"
          placeholder="Search an IPO"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <button
          className="w-[10%] h-[25px]"
          onClick={() => {
            props.search(query)
          }}
        >
          <Image height={20} src={Search} alt="Search" />
        </button>
        <button className="w-[20%] h-[25px]" onClick={props.reset}>
          Reset
        </button>
      </div>
    </>
  )
}
