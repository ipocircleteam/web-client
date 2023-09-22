import React from 'react'

export default function HelpGuide() {
  return (
    <div id="helpGuide" className="text-center my-[20px]">
      <h1 className="text-primary text-[2rem] font-bold">How it works?</h1>
      <label className="text-[1.1rem] leading-tight">
        Please follow this step by step guide
      </label>

      <div className="flex flex-wrap justify-center items-start mt-[15px]">
        <div className="w-[320px] mdlg:w-[400px]">
          <p className="text-primary font-bold text-[1.2rem] mt-[10px]">
            Available amount
          </p>
          <label className="leading-tight">
            Please enter the amount which you want to invest in IPOs
          </label>
        </div>

        <div className="w-[320px] mdlg:w-[400px]">
          <p className="text-primary font-bold text-[1.2rem] mt-[10px]">
            No of demat accounts
          </p>
          <label className="leading-tight">
            Please enter total number of demat accounts you have access to apply
            for IPO
          </label>
        </div>

        <div className="w-[320px] mdlg:w-[400px]">
          <p className="text-primary font-bold text-[1.2rem] mt-[10px]">
            Risk profile
          </p>
          <label className="leading-tight">
            This value defines how much risk you are wilpng to take on your
            invested money. Please see high risk does not always gives higher
            rewards.
          </label>
        </div>
      </div>

      <div className="w-[320px] mdlg:w-[400px] mx-auto my-[20px]">
        <p className="text-primary font-bold text-[1.2rem] mt-[10px]">
          Profit probabipty
        </p>
        <label className="leading-tight">
          Profit depends on whether an apppcation will be allotted to you or
          not. But this perimeter helps us to understand your approach as an
          individual towards investments so that we can provide you better
          investment strategy.
        </label>
      </div>
    </div>
  )
}
