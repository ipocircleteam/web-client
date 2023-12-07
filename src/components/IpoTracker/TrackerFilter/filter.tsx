import React from 'react'
import FilterHeader from './filter-header'
import FilterBody from './filter-body'
import FilterFooter from './filter-footer'

export default function Filter(props: {
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
}) {
  return (
    <div id="filter" className=" bg-white border overflow-hidden">
      <FilterBody
        positiveListing={props.positiveListing}
        negativeListing={props.negativeListing}
        cpGreaterthanIp={props.cpGreaterthanIp}
        cpLesserthanIp={props.cpLesserthanIp}
        cpGreaterthanLp={props.cpGreaterthanLp}
        cpLesserthanLp={props.cpLesserthanLp}
        filter={props.filter}
      />
    </div>
  )
}
