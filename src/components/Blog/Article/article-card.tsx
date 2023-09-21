import React from 'react'
import { ArticleDataType } from '../article.types'
import Link from 'next/link'
import Image from 'next/image'
import AuthorDetails from './author-details'
import ArticleContent from './article-content'

export default function ArticleCard(props: ArticleDataType) {
  return (
    <Link href={'/blog/' + props.blogId}>
      <div className="border border-r-0 border-l-0 border-t-0 p-[30px] py-[35px] mx-auto">
        <section className="w-[95%] mx-auto">
          <ArticleContent
            title={props.data.title}
            desc={props.data.desc}
            image={props.data.image}
          />

          <section className="flex justify-center md:justify-start items-center mt-1">
            {props.data.topic.map((topic, index) => {
              return <Tag title={topic} key={'blog-' + index} />
            })}
            <Tag title={props.data.readingTime + ' min'} />
          </section>
        </section>
      </div>
    </Link>
  )
}

function Tag(props: { title: string }) {
  return (
    <div className="text-primary bg-gray-100 p-2 mr-2 rounded-2xl min-w-[60px] text-center">
      {props.title}
    </div>
  )
}
