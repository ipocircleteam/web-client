import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from '../../../public/icons'

export default function SocialLinks() {
  return (
    <div className="flex justify-start items-center">
      <Link
        title="Linkedin"
        href="/linkedin"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Linkedin} alt="" width={15} height={15} /> */}
        Linkedin
      </Link>
      <Link
        title="Twitter"
        href="/twitter"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Twitter} alt="" width={15} height={15} /> */}
        Twitter
      </Link>
      <Link
        title="Instagram"
        href="/instagram"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Instagram} alt="" width={15} height={15} /> */}
        Instagram
      </Link>
    </div>
  )
}
