import react from 'react'
import { IpoCategoryProps } from './ipodata.types'
import $ from 'jquery'

export default function IpoCategory(props: IpoCategoryProps) {
  const handleClick = (name: string) => {
    props.callback(name)
    $('#main').toggleClass('shift-view')
    $('#sme').toggleClass('shift-view')
  }

  return (
    <div className="w-[100vw] mx-auto flex justify-center items-center">
      <button
        id="main"
        className="shift-view m-2 h-[30px] px-2 rounded-md text-primary"
        onClick={() => {
          handleClick('main')
        }}
      >
        Mainboard
      </button>

      <button
        id="sme"
        className=" m-2 h-[30px] px-2 rounded-md text-primary"
        onClick={() => {
          handleClick('sme')
        }}
      >
        SME
      </button>
    </div>
  )
}
