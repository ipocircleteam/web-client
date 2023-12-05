import React from 'react'
import Image from 'next/image'
import { Logo } from '../../../public/logo'
import SocialLinks from './social-links'

export default function CompanyInfo() {
  return (
    <div className="md:flex text-center md:text-justify items-center justify-between p-4 w-[100%]">
      <div className="w-[auto] h-[auto] p-[5px] flex justify-center md:justify-start items-start overflow-hidden border">
        <Image src={Logo} alt="" width={200} />
      </div>
      <div className="mx-2">
        <p className="text-[1.2rem]">
          &#169; {new Date().getFullYear()}. All rights reserved
        </p>
        <SocialLinks />
        <p className="text-[1.2rem]">support@ipocircle.com</p>
        <p className="text-[1.2rem]">Chandigarh, India</p>
      </div>
    </div>
  )
}
