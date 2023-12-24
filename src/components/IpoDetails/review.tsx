import Image from 'next/image'
import React from 'react'
import { LogoIcon } from '../../../public/logo'
import NameDivider from '@/components/Global/name-divider'
import { ReviewType } from '../../app/ipo/data.types'

export default function OurReview(props: { data: ReviewType }) {
  return (
    <div id="ourReview" className="my-[60px]">
      <label className="text-primary text-[1.2rem] font-bold">
        {props.data.review.length === 0 ? '' : 'Our Review'}
      </label>
      <div className="w-[95%] mx-auto my-[10px]">
        <p>{props.data.review}</p>
      </div>
    </div>
  )
}
