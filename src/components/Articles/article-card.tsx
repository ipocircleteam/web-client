import Image from 'next/image'
import React from 'react'
import { Blog1, Blog2, Blog3 } from '../../../public/blog'
import { BlogDataType } from './article.types'
import Link from 'next/link'

export default function ArticleCard(props: BlogDataType) {
  return (
    <>
      <div className="m-0 my-2 md:my-4 mx-4 md:mx-6 lg:mx-8 p-0 w-[300px] rounded-xl">
        <div className="bg-red-100 w-[300px] h-[auto] mx-auto my-3 md:my-4 overflow-hidden">
          <Image src={Blog2} alt="" />
        </div>
        <h1 className="text-primary font-bold text-[1.2rem] md:text-[1.5rem] text-left">
          {props.title}
        </h1>
        <p className="text-justify">
          {props.para.substring(0, 150) + '...'}{' '}
          <Link
            className="text-secondary text-[0.8rem]"
            href={'/blog/' + props.id}
          >
            READ MORE
          </Link>
        </p>
      </div>
    </>
  )
}
