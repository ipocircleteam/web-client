import Image from 'next/image'
import Link from 'next/link'
import { Cross } from '../../../public/icons'

export function LargeNavigation() {
  return (
    <div className="m-0 flex justify-end items-center px-2">
      {/* <Link
        href="/gmp"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        GMP
      </Link> */}

      <Link
        href="/ipo"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        IPOs
      </Link>

      <Link
        href="/ipotracker"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        IPO Tracker
      </Link>

      {/* <Link
        href="/marketanalyser"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        Market Analyser
      </Link> */}

      <Link
        href="/algorithm"
        className="mx-4 text-[1.6rem] md:text-[1.1rem] bg-secondary p-2 px-4 font-semibold rounded-lg border border-secondary
          hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
      >
        Ask Jarvis
      </Link>
    </div>
  )
}

export function SmallNavigationLinks(props: { callback: () => void }) {
  return (
    <>
      <div className="flex m-0 border border-t-0 border-l-0 border-r-0 cursor-pointer justify-end items-center px-4 pt-2">
        <Image
          onClick={props.callback}
          alt="Menu"
          height={20}
          src={Cross}
          width={20}
          className="my-2"
        />
      </div>

      {/* <div className="m-2 text-[20px]">
        <Link
          href="/gmp"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          GMP
        </Link>
      </div> */}

      <div className="m-2 text-[20px]">
        <Link
          href="/ipo"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPOs
        </Link>
      </div>

      <div className="m-2 text-[20px]">
        <Link
          href="/ipotracker"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          IPO Tracker
        </Link>
      </div>

      {/* <div className="m-2 text-[20px]">
        <Link
          href="/marketanalyser"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Market analyser
        </Link>
      </div> */}

      <div className="m-2 text-[20px]">
        <Link
          href="/algorithm"
          className="mx-4 text-primary hover:text-secondary font-semibold"
        >
          Ask Jarvis
        </Link>
      </div>
    </>
  )
}
