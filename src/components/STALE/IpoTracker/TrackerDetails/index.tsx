import React from 'react'
import SearchBar from './search-bar'
import Filter from '../TrackerFilter'
import { TrackerDataType } from '../../../../types/ipoTracker'

export default function TrackerDetails(props: {
  filter: (
    sector: string,
    year: number,
    price: number,
    p1: String,
    p2: String,
    op: String,
  ) => void
  positiveListing: () => void
  negativeListing: () => void
  cpGreaterthanIp: () => void
  cpLesserthanIp: () => void
  cpGreaterthanLp: () => void
  cpLesserthanLp: () => void
  search: (name: string) => void
  query: string
  setQuery: (q: string) => void
  trackerData: TrackerDataType[]
}) {
  return (
    <div className="w-[100%] border mx-auto overflow-hidden p-2">
      <SearchBar
        query={props.query}
        setQuery={props.setQuery}
        search={props.search}
      />
      <Filter
        filter={props.filter}
        positiveListing={props.positiveListing}
        negativeListing={props.negativeListing}
        cpGreaterthanIp={props.cpGreaterthanIp}
        cpLesserthanIp={props.cpLesserthanIp}
        cpGreaterthanLp={props.cpGreaterthanLp}
        cpLesserthanLp={props.cpLesserthanLp}
      />
    </div>
  )
}
