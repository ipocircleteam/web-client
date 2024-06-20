// import CTAbutton from '@/components/Buttons/cta-btn'
import React from 'react'
import $ from 'jquery'

export default function FilterFooter(props: {
  applyFlter: () => void
  resetFilter: () => void
}) {
  return (
    <div className="w-[100%] flex justify-center items-center p-2 px-4">
      {/* <CTAbutton
        text="Apply"
        function={() => {
          props.applyFlter()
        }}
      />
      <CTAbutton
        text="Reset"
        function={() => {
          props.resetFilter()
        }}
      /> */}
    </div>
  )
}
