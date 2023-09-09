import React from 'react'

export default function NameDivider(props: { text: string }) {
  return (
    <div className="my-[15px] flex justify-center items-center w-[100%]">
      <h1 className="mx-2 text-gray-400">{props.text}</h1>
      <div className="w-[85%] h-[1px] bg-gray-300 "></div>
    </div>
  )
}
