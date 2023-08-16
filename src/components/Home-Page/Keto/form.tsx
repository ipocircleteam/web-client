'use client'

import React, { useState } from 'react'
import $ from 'jquery'
import Image from 'next/image'
import { Cross } from '../../../../public/icons'
import CTAbutton from '../../Buttons/cta-btn'
import { Logo } from '../../../../public/logo'

export default function Form() {
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
      <div className="flex m-0 cursor-pointer justify-end items-center px-4 pt-2">
        <Image
          onClick={closeForm}
          alt="Menu"
          height={20}
          src={Cross}
          width={20}
          className="my-2"
        />
      </div>

      <section id="form" className="w-[90%] md:w-[70%] mx-auto text-center">
        <label className="text-base mx-auto font-bold text-[1.4rem] text-center">
          Get notified when we launch our new features
        </label>

        <input
          className="w-[100%] p-2 rounded-md text-primary outline-none my-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <input
          className="w-[100%] p-2 rounded-md text-primary outline-none my-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <button
          onClick={submitForm}
          className=" w-[100%] bg-primary p-2 my-2 font-semibold rounded-lg
          hover:bg-base hover:border-secondary custom-btn-transition text-secondary"
        >
          Submit
        </button>
      </section>
    </>
  )
}
