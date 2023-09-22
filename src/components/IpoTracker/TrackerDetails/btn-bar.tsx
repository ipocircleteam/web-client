import React from 'react'
import SearchBar from './search-bar'
import TrackerBtn from '@/components/Buttons/tracker-btn'

export default function BtnBar(props: {
  darkMode: boolean
  toggleFilters: () => void
}) {
  return (
    <section className="p-2">
      {/* <SearchBar darkMode={props.darkMode} /> */}

      {/* <TrackerBtn
        text="Filters"
        contentType="text"
        darkMode={props.darkMode}
        callback={props.toggleFilters}
      >
        <p className="uppercase">Filters</p>
      </TrackerBtn> */}
    </section>
  )
}
