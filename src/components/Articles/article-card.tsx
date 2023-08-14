import Image from 'next/image'
import React from 'react'
import { Blog1, Blog2, Blog3 } from '../../../public/blog'

export default function ArticleCard() {
  return (
    <>
      <div className="m-0 my-1 md:my-4 mx-4 md:mx-6 lg:mx-8 p-0 w-[300px] h-[200px] rounded-xl">
        <Image src={Blog1} alt="" width={300} height={200} />
      </div>
      <div className="m-0 my-1 md:my-4 mx-4 md:mx-6 lg:mx-8 p-0 w-[300px] h-[200px] rounded-xl">
        <Image src={Blog2} alt="" width={300} height={200} />
      </div>
      <div className="m-0 my-1 md:my-4 mx-4 md:mx-6 lg:mx-8 p-0 w-[300px] h-[200px] rounded-xl">
        <Image src={Blog3} alt="" width={300} height={200} />
      </div>
    </>
  )
}
