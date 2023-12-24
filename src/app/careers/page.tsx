import Footer from '@/components/Footer'
import Menu from '@/components/Menu/menu'
import Link from 'next/link'

export default async function Careers() {
  return (
    <div className="w-[100vw] ">
      <div className="w-[100%] h-[300px]">
        <div className="h-[100%] text-[50px] font-semibold text-primary flex justify-center items-center w-[100%] md:w-[80%] lg:w-[60%] border-b-2 mx-auto">
          We need you
          <p>Careers Page</p>
        </div>
      </div>

      <div className="w-[100%] md:w-[65%] mx-auto p-4 text-gray-600 text-[18px] mt-[30px]">
        Thank you for considering reaching out to us! We value your input and
        are eager to assist you in any way we can. Whether you have questions
        about our products or services, need help with an order, or simply want
        to provide feedback, we are here to listen. Our dedicated team is
        committed to ensuring your experience with us is positive and seamless.
        Please feel free to send a message on our social media handled and we
        will reply as soon as possible
        <br />
        <br />
        Alternatively, you can reach us directly via email -
        support@ipocircle.com. Your satisfaction is our priority, and we look
        forward to connecting with you soon!
        <div className="flex justify-around items-center border-t-2 border-b-2 my-[30px] py-[20px]">
          <Link
            href="https://www.linkedin.com/company/ipocircle"
            target="__blank"
          >
            Linkedin
          </Link>

          <Link href="https://twitter.com/ipocircle" target="__blank">
            Twitter
          </Link>

          <Link href="https://www.instagram.com/ipo.circle/" target="__blank">
            Instagram
          </Link>

          <Link href="mailto:support@ipocircle.com" target="__blank">
            Gmail
          </Link>
        </div>
      </div>
    </div>
  )
}
