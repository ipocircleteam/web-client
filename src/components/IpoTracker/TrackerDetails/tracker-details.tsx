import React from 'react'
import TrackerBtn from '@/components/Buttons/tracker-btn'
import SearchBar from './search-bar'
import BtnBar from './btn-bar'
import CurrentParams from './current-params'
import Filter from '../TrackerFilter/filter'
import GraphPanel from '../TrackerGraph/graph-panel'
import { TrackerDataType } from '../TrackerTable/table.types'

export default function TrackerDetails(props: {
  darkMode: boolean
  toggleFilters: () => void
  filter: (
    sector: string,
    year: number,
    price: number,
    p1: String,
    p2: String,
    op: String,
  ) => void
  search: (name: string) => void
  trackerData: TrackerDataType[]
}) {
  const getTotalPrice = (
    type: 'listing_price' | 'current_price' | 'dayend_price' | 'issue_price',
  ) => {
    let sum = 0
    props.trackerData.forEach((element) => {
      sum = sum + element[type]
    })
    return sum
  }

  return (
    <div className="w-[100%] lg:w-[90%] mx-auto overflow-hidden p-2">
      <GraphPanel
        darkMode
        data1={[
          { name: 'Listing', value: getTotalPrice('listing_price') },
          { name: 'Current', value: getTotalPrice('current_price') },
        ]}
      />
      <SearchBar darkMode={props.darkMode} search={props.search} />
      <Filter filter={props.filter} />
    </div>
  )
}
