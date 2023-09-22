import React from 'react'
import TrackerBtn from '@/components/Buttons/tracker-btn'
import SearchBar from './search-bar'
import BtnBar from './btn-bar'
import CurrentParams from './current-params'

export default function TrackerDetails(props: {
  darkMode: boolean
  toggleFilters: () => void
}) {
  return (
    <div className="w-[100%] p-2 rounded-lg border">
      {/* <CurrentParams darkMode={props.darkMode} /> */}
      <BtnBar darkMode={props.darkMode} toggleFilters={props.toggleFilters} />
    </div>
  )
}
