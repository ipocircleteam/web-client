'use client'
import { IpoPreviewProps } from '@/types/ipodata'
import IpoList from './IpoTable'

const IpoPreviewList = ({ main, sme }: IpoPreviewProps) => {
  return (
    <div className="my-[1rem] text-center container mx-auto w-[100%]">
      <div className="w-[100%] mx-auto">
        <IpoList smeData={sme} mainData={main} />
      </div>
    </div>
  )
}

export default IpoPreviewList
