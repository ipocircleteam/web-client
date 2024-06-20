import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../../../public/logo'
import DesktopNavbar from './DesktopNavbar'

export default function DesktopHeader() {
  return (
    <div
      className="px-[10px] py-[7px] m-0 border-b w-[100%] flex justify-between items-center mx-auto"
      data-testid="large-menu"
    >
      <Link href="/">
        <div className="flex justify-center items-center text-[1.5rem] font-bold">
          <Image
            className="ml-5 m-0 p-0"
            alt="IPOCircle"
            height={35}
            src={Logo}
            width={120}
          />
        </div>
      </Link>

      <DesktopNavbar />
    </div>
  )
}
