import React from 'react'
import { articlesData } from '@/dummydata'
import ArticleCard from './article-card'

export default function Articles() {
  return (
    <div>
      <h1 className="text-primary text-[1.2rem] my-2 uppercase font-semibold">
        Articles
      </h1>
      <hr />
      <section>
        {articlesData.map((article, index) => {
          return (
            <ArticleCard
              blogId={article.blogId}
              data={article.data}
              key={'article-' + index}
            />
          )
        })}
      </section>
    </div>
  )
}
