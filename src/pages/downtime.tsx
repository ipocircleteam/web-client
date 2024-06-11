import Image from 'next/image'
import { LogoIcon } from '../../public/logo'
import './styles.css'
import Link from 'next/link'

export default function Downtime() {
  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <Image width={100} height={100} src={LogoIcon} alt="" />
      </div>
      <h1 className="font-bold">We&apos;ll Be Back Soon!</h1>
      <div className="w-[95%] md:w-[50%] lg:w-[70%] mx-auto text-justify mb-4">
        <hr />
        <p className="text-[18px] ">
          We&apos;re currently working on some exciting new features for our
          website. We apologize for any inconvenience this may cause and
          appreciate your patience.
        </p>
        <p className="text-[18px] ">
          Follow us on X/Twitter for updates and sneak peeks of what&apos;s to
          come! Thank you for your understanding, and we look forward to
          welcoming you back soon.
          <br />- Team IPO Circle
        </p>
        <hr />
      </div>
      <Link href="https://x.com/ipocircle">
        <button>Follow on X.com</button>
      </Link>
    </div>
  )
}
