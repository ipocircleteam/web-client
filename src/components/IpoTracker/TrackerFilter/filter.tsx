import React from 'react'
import FilterHeader from './filter-header'
import FilterBody from './filter-body'
import FilterFooter from './filter-footer'

export default function Filter() {
  return (
    <div
      id="filter"
      className="fixed z-50 custom-filter-panel hidden h-[100vh] bg-white shadow-lg border border-r-0 right-0"
    >
      <FilterHeader />
      <FilterBody />
    </div>
  )
}
