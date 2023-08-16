import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from '../../../public/icons'

export default function SocialLinks() {
  return (
    <div className="flex justify-start items-center py-1">
      <Link
        title="Linkedin"
        href="/linkedin"
        className="mr-[15px] cursor-pointer"
      >
        <Image src={Linkedin} alt="" width={15} height={15} />
      </Link>
      <Link
        title="Twitter"
        href="/twitter"
        className="mr-[15px] cursor-pointer"
      >
        <Image src={Twitter} alt="" width={15} height={15} />
      </Link>
      <Link
        title="Instagram"
        href="/instagram"
        className="mr-[15px] cursor-pointer"
      >
        <Image src={Instagram} alt="" width={15} height={15} />
      </Link>
    </div>
  )
}
