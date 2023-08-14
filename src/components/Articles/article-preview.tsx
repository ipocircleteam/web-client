import React from 'react'
import ArticleCard from './article-card'

export default function Articles() {
  return (
    <div className="mt-[50px] w-[100vw] mx-auto p-4">
      <h1 className="text-secondary text-[1.5rem] font-bold text-center mb-4">
        What's buzzing in the market?
      </h1>

      <section className="flex justify-center flex-wrap items-center w-[90vw] mx-auto">
        <ArticleCard />
      </section>
    </div>
  )
}
