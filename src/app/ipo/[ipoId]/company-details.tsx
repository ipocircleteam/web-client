import Image from 'next/image'
import React from 'react'
import { LogoIcon } from '../../../../public/logo'
import { CompanyDetailsType } from '../data.types'

export default function CompanyDetails(props: { data: CompanyDetailsType }) {
  return (
    <div id="companyDetails" className="mt-[20px]">
      <div className="w-[100%]">
        <div className="mdlg:flex justify-between items-center">
          <section className="flex justify-start items-center">
            <Image
              height={60}
              src={props.data.company_logo_url}
              alt={'IPO Circle'}
            />
            <h2 className="mx-2 text-primary text-[40px] font-semibold">
              {props.data.company_name}
            </h2>
          </section>

          <section
            className="flex-col mdlg:flex-row my-[10px] mdlg:my-[0px] 
          flex justify-center items-start mdlg:items-center"
          >
            <label className="mx-2">
              Opening Date:
              <b className="text-blue-500 text-[1.1rem]">
                {props.data.opening_date}
              </b>
            </label>
            <label className="mx-2">
              Closing Date:
              <b className="text-red-500 text-[1.1rem]">
                {props.data.closing_date}
              </b>
            </label>
          </section>
        </div>

        <div className="w-[95%] mx-auto my-[10px]">
          <p className="text-justify mdlg:text-left">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
