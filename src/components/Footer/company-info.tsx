import React from 'react'
import Image from 'next/image'
import { Logo } from '../../../public/logo'
import SocialLinks from './social-links'

export default function CompanyInfo() {
  return (
    <div className="flex flex-col justify-between p-4 sm:w-[50%] border">
      <span className="w-[300px]">
        <div className="w-[auto] h-[auto] p-[5px] flex justify-start items-start overflow-hidden border">
          <Image src={Logo} alt="" width={180} />
        </div>
        <div className="mx-2">
          <p className="text-[1.2rem]">
            &#169; {new Date().getFullYear()}. All rights reserved
          </p>
          <SocialLinks />
          <p className="text-[1.2rem]">support@ipocircle.com</p>
          <p className="text-[1.2rem]">Chandigarh, India</p>
        </div>
      </span>
    </div>
  )
}
