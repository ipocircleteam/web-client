import React from 'react'
import TrackerBtn from '@/components/Buttons/tracker-btn'
import SearchBar from './search-bar'
import BtnBar from './btn-bar'
import CurrentParams from './current-params'
import Filter from '../TrackerFilter/filter'

export default function TrackerDetails(props: {
  darkMode: boolean
  toggleFilters: () => void
  filter: (sector: string, year: number, price: number) => void
  search: (name: string) => void
}) {
  return (
    <div className="w-[100%] lg:w-[90%] mx-auto overflow-hidden p-2">
      <SearchBar darkMode={props.darkMode} search={props.search} />
      <Filter filter={props.filter} />
    </div>
  )
}
