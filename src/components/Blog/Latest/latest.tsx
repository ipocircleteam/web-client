import React from 'react'
import { articlesData } from '@/dummydata'
import TrendingCard from './trending-card'
import Link from 'next/link'

export default function Latest() {
  const latest = articlesData.slice(0, 2)
  return (
    <div className="lg:w-[90%] mx-auto">
      <h1 className="text-primary text-[1.1rem] uppercase font-semibold">
        Trending in market
      </h1>
      <hr />
      <section>
        {latest.map((item) => {
          return (
            <Link href={'/blog/' + item.blogId}>
              <TrendingCard title={item.data.title} desc={item.data.desc} />
            </Link>
          )
        })}
      </section>
    </div>
  )
}
