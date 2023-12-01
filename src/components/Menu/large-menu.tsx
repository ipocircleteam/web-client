import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../../../public/logo'
import { LargeNavigation } from './navigation-links'

export default function LargeMenu() {
  return (
    <div
      className="px-[10px] py-[7px] m-0 border-b w-[100vw] flex justify-between items-center container mx-auto"
      data-testid="large-menu"
    >
      <div className="flex justify-center items-center text-[1.5rem] font-bold">
        <Link href="/">
          <Image
            className="ml-5 m-0 p-0"
            alt="IPOCircle"
            height={35}
            src={Logo}
            width={120}
          />
        </Link>
      </div>

      <LargeNavigation />
    </div>
  )
}
