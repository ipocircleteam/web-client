import Link from 'next/link'

export default function DesktopNavbar() {
  return (
    <div className="m-0 flex justify-end items-center px-2">
      <Link
        href="/gmp"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        GMP
      </Link>

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

      <Link
        href="/optiorder"
        className="mx-4 text-primary hover:text-secondary font-semibold"
      >
        IPO Pulse
      </Link>

      <Link
        href="/algorithm"
        className="mx-4 text-[1.6rem] md:text-[1.1rem] bg-secondary p-2 px-4 font-semibold rounded-lg border border-secondary
            hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
      >
        Ask Maverick
      </Link>
    </div>
  )
}
