'use client'

import React from 'react'
import { CTAType } from './button.types'

export default function LargeCTAbutton(props: CTAType) {
  return (
    <button
      onClick={props.function}
      className="mx-4 text-[1.6rem] md:text-[1.1rem] bg-secondary py-2 px-4 font-semibold rounded-lg border border-secondary
          hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
    >
      {props.text}
    </button>
  )
}
