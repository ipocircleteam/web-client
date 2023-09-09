import Image from 'next/image'
import React from 'react'
import { LogoIcon } from '../../../../public/logo'
import NameDivider from '@/components/Global/name-divider'

export default function CompanyDetails() {
  return (
    <>
      <NameDivider text="Company Details" width={80} />
      <div className="w-[100%]">
        <div className="flex justify-between items-center">
          <section className="flex justify-start items-center">
            <Image height={60} src={LogoIcon} alt={'IPO Circle'} />
            <h2 className="mx-2 text-primary text-[40px] font-semibold">
              {'IPO Circle'}
            </h2>
          </section>
          <section className="flex justify-center items-center">
            <label className="mx-2">
              Opening Date: <b className="text-green-500">30 September 2023</b>
            </label>
            <label className="mx-2">
              Closing Date: <b className="text-red-500">5 October 2023</b>
            </label>
          </section>
        </div>

        <div className="w-[95%] mx-auto my-[10px]">
          <p>
            Maecenas a lacus libero. Praesent convallis pellentesque turpis,
            vitae semper erat pharetra id. Nunc non justo quis ante dictum
            blandit. Aliquam diam arcu, cursus eu varius sit amet, volutpat ac
            tortor. Curabitur diam nisl, ullamcorper eget scelerisque id,
            faucibus scelerisque magna. Nunc at augue tellus. Fusce sagittis
            purus elit, vitae auctor metus suscipit et. Sed nibh justo, semper
            quis tincidunt a, semper eu eros. Aliquam at elit aliquet erat
            suscipit venenatis. Donec pretium suscipit lacus, bibendum faucibus
            lacus iaculis sed.
          </p>
        </div>
      </div>
    </>
  )
}
