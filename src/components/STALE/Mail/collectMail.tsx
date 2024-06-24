'use client'
import { useState } from 'react'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

export default function CollectMail() {
  const [mail, setMail] = useState('')
  const [isSent, sentMail] = useState(false)

  const sendMail = async () => {
    sentMail(true)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/mail/addMail`,
        {
          mail: mail,
        },
      )
      console.log('success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[100%]">
      <div className="w-[100%] mx-auto">
        <p className="text-[20px] text-primary mb-[15px]">
          {isSent
            ? "We'll notify you as soon as we launch"
            : 'Wanna get notified, when we launch? Subscribe below'}
        </p>
      </div>

      {!isSent && (
        <div className="flex justify-center items-center">
          <input
            type="email"
            value={mail}
            placeholder="enter your mail id..."
            onChange={(e) => {
              setMail(e.target.value)
            }}
            className="border-2 outline-none border-r-0 h-[50px] w-[70%] sm:w-[80%] p-2"
          />
          <button
            onClick={() => {
              sendMail()
            }}
            className="border-2 border-blue-500 border-l-0 h-[50px] w-[30%] md:w-[20%] text-white bg-blue-500"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  )
}
