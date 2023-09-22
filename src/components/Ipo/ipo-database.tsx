import React from 'react'
import { IpoTable } from '../Home-Page/IPOData/ipo-table'
import Table from './table'
import Filters from './filters'

export default function IpoDatabase() {
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="text-primary font-semibold text-[20px] mt-[10px] px-3">
        IPO Database
      </h1>

      <div className="w-[100%] border">
        <Table />
      </div>
    </div>
  )
}
