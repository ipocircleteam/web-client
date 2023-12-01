import Link from 'next/link'
import Image from 'next/image'
import { Study } from '../../../../public/vectors'

export default function IpoStudy() {
  return (
    <section
      className="md:mt-[0px] py-[0px] w-[90vw] mx-auto flex flex-col mdlg:flex-row 
    justify-center items-center p-4 px-6"
    >
      <div className="w-[95%] mdlg:w-[45%] hidden md:block">
        <div className="w-[100%] mdlg:w-[70%]">
          <Image src={Study} alt="" />
        </div>
      </div>
      <div className="w-[95%] mdlg:w-[45%]">
        <h1 className="text-[1.8rem] leading-tight">
          Don&apos;t know what primary market is?
        </h1>
        <p className="text-[1.1rem] mt-[10px]">
          A comprehensive repository of all materials designed to facilitate
          your comprehension of IPOs (Initial Public Offerings) and primary
          markets.
        </p>
        <Link href="" className="text-primary hover:text-black mt-[20px]">
          Explore for free
        </Link>
      </div>

      <div className="w-[95%] mdlg:w-[45%] block md:hidden">
        <div className="w-[100%] mdlg:w-[70%]">
          <Image src={Study} alt="" />
        </div>
      </div>
    </section>
  )
}
