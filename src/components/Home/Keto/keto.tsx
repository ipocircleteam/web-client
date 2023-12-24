'use client'

import React from 'react'
import CTAbutton from '../../Buttons/cta-btn'
import KetoForm from './keto-box'
import $ from 'jquery'

export default function Keto() {
  return (
    <>
      <KetoForm />
      <div className="my-[25px] text-center w-[80vw] md:w-[90vw] mx-auto rounded-lg px-4 bg-blue-50 py-[30px]">
        <h1 className="text-primary text-[1.5rem] md:text-[2rem] font-semibold text-center leading-tight">
          Do not have money to invest in IPOs?
        </h1>
        <h1 className="text-primary text-[1.1rem] md:text-[1.2rem] font-semibold text-center leading-tight  mb-0">
          Want to maximise your profit probability in STA ?
        </h1>
        <br />
        <CTAbutton
          text="Get Notified"
          function={() => {
            $('#Ketoform').toggleClass('hidden')
            $('#Ketobackdrop').toggleClass('hidden')
          }}
        />
      </div>
    </>
  )
}
