import Image from 'next/image'
import { CompanyDetailsType } from '../data.types'

export default function CompanyDetails(props: { data: CompanyDetailsType }) {
  return (
    <div id="companyDetails" className="mt-[20px] w-[100%] pb-[40px] mb-[30px]">
      <div className="w-[100%]">
        <div className="mdlg:flex justify-between items-center">
          <section className="flex justify-start items-center">
            {props.data.company_logo_url.length !== 0 && (
              <Image
                height={60}
                src={props.data.company_logo_url}
                alt={'IPO Circle'}
              />
            )}
            <h2 className="mx-2 text-primary text-4xl font-bold">
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
                {props.data.opening_date.substring(0, 10)}
              </b>
            </label>
            <label className="mx-2">
              Closing Date:
              <b className="text-red-500 text-[1.1rem]">
                {props.data.closing_date.substring(0, 10)}
              </b>
            </label>
          </section>
        </div>
      </div>
    </div>
  )
}
