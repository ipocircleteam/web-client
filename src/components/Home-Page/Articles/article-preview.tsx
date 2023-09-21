import React from 'react'
import ArticleCard from './article-card'
import { blogData } from '@/dummydata'

export default function Articles() {
  return (
    <div className="mt-[30px] w-[100vw] mx-auto p-4">
      <h1 className="text-secondary text-[1.4rem] font-bold text-center leading-tight mb-4">
        Whats buzzing in the market?
      </h1>

      <section className="flex justify-center flex-wrap items-start w-[90vw] mx-auto">
        <ArticleCard
          id={blogData[0].id}
          title={blogData[0].title}
          para={blogData[0].para}
        />
        <ArticleCard
          id={blogData[1].id}
          title={blogData[1].title}
          para={blogData[1].para}
        />
        <ArticleCard
          id={blogData[2].id}
          title={blogData[2].title}
          para={blogData[2].para}
        />
      </section>
    </div>
  )
}
