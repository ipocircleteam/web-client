'use client'

import React, { useState } from 'react'
import $ from 'jquery'
import Image from 'next/image'
import { Cross } from '../../../public/icons'
import CTAbutton from '../Buttons/cta-btn'
import { Logo6 } from '../../../public/logo'
import Form from './form'

export default function KetoForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const closeForm = () => {
    $('#Ketoform').toggleClass('hidden')
    $('#Ketobackdrop').toggleClass('hidden')
  }

  const submitForm = () => {
    $('#form').toggleClass('hidden')
    $('#confirmation').toggleClass('hidden')
    setTimeout(() => {
      closeForm()
    }, 5000)
  }

  return (
    <>
      <div
        id="Ketobackdrop"
        onClick={closeForm}
        className="hidden fixed left-0 top-0 opacity-50 w-[100vw] h-[100vh] "
      ></div>
      <div
        id="Ketoform"
        className="custom-scale custom-gradient border border-secondary hidden fixed left-[5vw] mdlg:left-[25vw] 
        bottom-[0vw] w-[90vw] mdlg:w-[50vw] shadow-slate-900 rounded-t-xl z-50"
      >
        <Form />

        <section
          id="confirmation"
          className="hidden text-center w-[90%] mx-auto"
        >
          <label className="text-primary text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold leading-tight">
            Thanks for showing your interest.
          </label>
          <br />

          <label className="text-primary text-[15px] leading-tight">
            We'll inform you as soon as we launch.
          </label>

          <div className="w-[90%] mx-auto flex justify-center mt-[30px] md:mt-[50px] text-primary font-bold text-[1.5rem]">
            IPOCIRCLE
          </div>
        </section>
      </div>
    </>
  )
}
