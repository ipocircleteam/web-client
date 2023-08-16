import React, { Children, ReactNode } from 'react'
import Image from 'next/image'
import { Compress, Dark, Expand, Light } from '../../../public/icons'

export default function TrackerBtn(props: {
  text: string
  callback: () => void
  contentType: string
  darkMode: boolean
  children: ReactNode
}) {
  return (
    <button
      title={props.text}
      onClick={props.callback}
      className={
        (props.contentType === 'text' ? 'w-[100px] ' : 'w-[40px] ') +
        (props.darkMode
          ? 'bg-primary hover:bg-blue-600 text-base '
          : 'bg-secondary hover:bg-green-600 text-primary ') +
        ' h-[40px] custom-btn-transition m-2 md:m-0 overflow-hidden  border-primary flex justify-center items-center md:mx-2 rounded-md'
      }
    >
      {props.children}
    </button>
  )
}
