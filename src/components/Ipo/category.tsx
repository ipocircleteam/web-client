import { IpoCategoryProps } from '../../lib/types/ipodata.types'
import $ from 'jquery'

export default function IpoCategory(props: IpoCategoryProps) {
  const handleClick = (name: string) => {
    props.callback(name)
    if (name === 'main') {
      $('#sme').removeClass('shift-view')
      $('#sme').addClass('hover:bg-blue-50')
      $('#main').addClass('shift-view')
      $('#main').removeClass('hover:bg-blue-50')
    } else {
      $('#main').removeClass('shift-view')
      $('#main').addClass('hover:bg-blue-50')
      $('#sme').addClass('shift-view')
      $('#sme').removeClass('hover:bg-blue-50')
    }
  }

  return (
    <div className="mx-auto flex justify-left items-center">
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
        className=" m-2 h-[30px] px-2 rounded-md text-primary hover:bg-blue-50"
        onClick={() => {
          handleClick('sme')
        }}
      >
        SME
      </button>
    </div>
  )
}
