import Image from 'next/image'
import { DataBoard } from '../../../../public/vectors'

export default function HomeBanner() {
  return (
    <section
      className="md:mt-[10px] py-[40px] w-[90vw] flex flex-col 
    mdlg:flex-row justify-center items-center p-4 px-6 container mx-auto max-w-9xl"
    >
      <div className="w-[95%] mdlg:w-[45%] hidden md:block">
        <div className="w-[100%] mdlg:w-[80%]">
          <Image src={DataBoard} alt="" />
        </div>
      </div>
      <div className="w-[95%] mdlg:w-[45%]">
        <h1 className="text-[1.8rem] leading-tight">
          Best analysis tool for primary markets
        </h1>
        <p className="text-[1.1rem] mt-[10px]">
          Our products are backed by advanced data visualisations and market
          research, which helps you to analyse current market scenarios like
          never before.
        </p>
        <div className="my-[10px]">
          <label>What we offer :</label>
          <span>
            <li>Sector based market analysis</li>
            <li>Current and previous IPO details</li>
            <li>Algorithm driven investment strategies</li>
            <li>Enhanced data visualisation and UX</li>
          </span>
        </div>
      </div>

      <div className="w-[95%] mdlg:w-[45%] block md:hidden">
        <div className="w-[100%] mdlg:w-[80%]">
          <Image src={DataBoard} alt="" />
        </div>
      </div>
    </section>
  )
}
