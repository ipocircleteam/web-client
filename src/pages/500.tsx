import Image from 'next/image'
import { LogoIcon } from '../../public/logo'
import './styles.css'
import Link from 'next/link'

export default function Custom500Page() {
  return (
    <div className="container">
      <Image width={150} height={150} src={LogoIcon} alt="" />
      <h1>500 Internal Server Error</h1>
      <p>
        Oops! Something went wrong on our side. <br /> Sorry for inconvenience!
      </p>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
  )
}
