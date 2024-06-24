import React from 'react'

export default function Result(props: { loading: boolean; result: string }) {
  return (
    <div
      id="algoResult"
      className="mx-auto w-[95%] md:w-[80%] border rounded-md p-2 h-[400px] my-[20px]"
    >
      <p className="font-bold text-[20px] text-center">
        {props.loading ? 'Please wait (Running Algorithm ...)' : ''}
      </p>
      {props.result}
    </div>
  )
}
