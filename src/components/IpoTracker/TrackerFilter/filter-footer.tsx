import CTAbutton from '@/components/Buttons/cta-btn'
import React from 'react'
import $ from 'jquery'

export default function FilterFooter() {
  return (
    <div className="w-[100%] flex justify-center items-center p-2 px-4">
      <CTAbutton
        text="Apply"
        function={() => {
          alert('Filters Applied')
          $('#filter').toggleClass('hidden')
        }}
      />
      <CTAbutton
        text="Reset"
        function={() => {
          alert('Filters Removed')
          $('#filter').toggleClass('hidden')
        }}
      />
    </div>
  )
}
