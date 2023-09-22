import Image from 'next/image'
import React from 'react'
import { LogoIcon } from '../../../../public/logo'
import NameDivider from '@/components/Global/name-divider'

export default function OurReview() {
  return (
    <div id="ourReview" className="my-[30px]">
      <label className="text-primary text-[1.2rem] font-bold">Our Review</label>
      <div className="w-[95%] mx-auto my-[10px]">
        <p>
          Maecenas a lacus libero. Praesent convallis pellentesque turpis, vitae
          semper erat pharetra id. Nunc non justo quis ante dictum blandit.
          Aliquam diam arcu, cursus eu varius sit amet, volutpat ac tortor.
          Curabitur diam nisl, ullamcorper eget scelerisque id, faucibus
          scelerisque magna. Nunc at augue tellus. Fusce sagittis purus elit,
          vitae auctor metus suscipit et. Sed nibh justo, semper quis tincidunt
          a, semper eu eros. Aliquam at elit aliquet erat suscipit venenatis.
          Donec pretium suscipit lacus, bibendum faucibus lacus iaculis sed.
        </p>
      </div>
    </div>
  )
}
