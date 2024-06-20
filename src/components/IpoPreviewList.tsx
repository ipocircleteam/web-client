import { IpoPreviewProps } from '@/types/ipodata'
import Link from 'next/link'
import IpoList from './IpoTable'

const IpoPreviewList = ({ main, sme }: IpoPreviewProps) => {
  return (
    <div className="mt-[3rem] text-center container mx-auto max-w-9xl ">
      <IpoList smeData={sme} mainData={main} />
      <div
        className="text-secondary my-2 text-center w-[100%] mx-auto text-[18px] 
            hover:text-primary cursor-pointer"
      >
        <Link href="/ipo">See All</Link>
      </div>
    </div>
  )
}

export default IpoPreviewList
