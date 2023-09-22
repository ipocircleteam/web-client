import React from 'react'
import FilterHeader from './filter-header'
import FilterBody from './filter-body'
import FilterFooter from './filter-footer'

export default function Filter(props: {
  filter: (sector: string, year: number, price: number) => void
}) {
  return (
    <div id="filter" className=" bg-white border overflow-hidden">
      <FilterBody filter={props.filter} />
    </div>
  )
}
