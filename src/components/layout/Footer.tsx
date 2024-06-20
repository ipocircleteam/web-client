import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '../../../public/logo'

export default function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 p-4 md:py-6 overflow-x-hidden container mx-auto max-w-9xl'">
        <div
          className="flex justify-center lg:justify-between overflow-x-hidden flex-wrap items-start w-[90vw] md:w-[80vw] mx-auto pb-2 
      "
        >
          <div className="md:flex text-center text-gray-500 md:text-justify items-center justify-between p-4 w-[100%]">
            <div className="w-[auto] h-[auto] p-[5px] flex justify-center md:justify-start items-start overflow-hidden border">
              <Image src={Logo} alt="" width={200} />
            </div>
            <div className="mx-2">
              <p className="text-[1.2rem]">
                &#169; {new Date().getFullYear()}. All rights reserved
              </p>
              <SocialLinks />
              <p className="text-[1.2rem]">support@ipocircle.com</p>
              <p className="text-[1.2rem]">Chandigarh, India</p>
            </div>
          </div>

          <div className="flex justify-start border border-gray-500 text-gray-500 border-r-0 border-l-0 border-t items-start p-2 w-[100%] mx-auto">
            <div className="mx-4">
              <Link href="/about">About</Link>
            </div>
            {/* <Link href="/careers">Careers</Link> */}
            <div className="mx-4">
              <Link href="/privacypolicy">Privacy</Link>
            </div>
            <div className="mx-4">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <p className="w-[90vw] md:w-[80vw] text-justify text-gray-500 text-[14px] mt-[30px] mx-auto">
          Disclaimer: Welcome to IPOcircle. Our website provides general
          information on initial public offerings (IPOs). Visitors are urged to
          independently research and consult with a qualified financial advisor
          before making investment decisions. We do not offer specific
          investment advice, and the content displayed is for informational
          purposes only. IPOcircle and its representatives are not registered
          with SEBI as advisors. The accuracy of information is not guaranteed.
          Users should verify details before making investment choices.
          IPOcircle is not liable for any damages resulting from the use of our
          website. By accessing our site, you agree to this disclaimer. We
          reserve the right to update it without notice. Last updated: 7
          December 2023.
        </p>
      </div>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex justify-start items-center">
      <Link
        title="Linkedin"
        href="https://www.linkedin.com/company/ipocircle"
        target="__blank"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Linkedin} alt="" width={15} height={15} /> */}
        Linkedin
      </Link>
      <Link
        title="Twitter"
        href="https://twitter.com/ipocircle"
        target="__blank"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Twitter} alt="" width={15} height={15} /> */}
        Twitter
      </Link>
      <Link
        title="Instagram"
        href="https://www.instagram.com/ipo.circle/"
        target="__blank"
        className="mr-[15px] cursor-pointer"
      >
        {/* <Image src={Instagram} alt="" width={15} height={15} /> */}
        Instagram
      </Link>
    </div>
  )
}
