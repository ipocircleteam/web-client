import { NextPageContext } from 'next'
import Image from 'next/image'
import { LogoIcon } from '../../public/logo'
import './styles.css'
import Link from 'next/link'

interface ErrorProps {
  statusCode: number
}

const Error = (props: ErrorProps) => (
  <div className="container">
    <Image width={150} height={150} src={LogoIcon} alt="" />
    <h1>{props.statusCode}</h1>
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
    <Link href="/">
      <button>Go to Home</button>
    </Link>
  </div>
)

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
