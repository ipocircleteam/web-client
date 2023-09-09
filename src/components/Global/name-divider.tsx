import React from 'react'

export default function NameDivider(props: { text: string; width: number }) {
  return (
    <div className="my-[15px] w-[100%]">
      <div className="mx-2 text-gray-400 flex justify-start items-center">
        {props.text}
        <div
          className={'w-[' + props.width + '%]' + ' h-[1px] bg-gray-300'}
        ></div>
      </div>
    </div>
  )
}
