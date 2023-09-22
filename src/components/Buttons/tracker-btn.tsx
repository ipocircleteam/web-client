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
        (props.darkMode ? ' ' : ' ') +
        ' bg-primary hover:bg-blue-600 text-white h-[40px] w-[100%] custom-btn-transition m-2 md:m-0 overflow-hidden  border-primary flex justify-center items-center rounded-md'
      }
    >
      {props.children}
    </button>
  )
}
