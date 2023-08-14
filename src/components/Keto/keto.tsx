'use client'

import React from 'react'
import CTAbutton from '../Buttons/cta-btn'
import KetoForm from './keto-box'
import $ from 'jquery'

export default function Keto() {
  return (
    <>
      <KetoForm />
      <div className="my-[100px] text-center w-[95vw] md:w-[90vw] mx-auto rounded-lg px-4 bg-blue-50 py-4">
        <h1 className="text-secondary text-[2rem] md:text-[2.5rem] font-semibold text-center leading-tight mb-4 md:mb-0">
          Don't have money to invest in IPOs?
        </h1>
        <h1 className="text-secondary text-[1.3rem] md:text-[1.5rem] font-semibold text-center leading-tight mb-4 md:mb-0">
          Want to maximise your profit probability in STA ?
        </h1>
        <br />
        <p className="text-primary text-[1.2rem] md:text-[1.5rem] text-center leading-tight">
          Don't worry. We got you covered with this as well
        </p>
        <p className="text-primary  my-2 text-center text-[1.4rem] md:text-[1.5rem] mx-auto font-bold ">
          <label className="tracking-widest mr-2 ">C O M I N G</label>{' '}
          <label className="ml-2 tracking-widest">S O O N</label>
        </p>
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
