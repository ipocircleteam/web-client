import PageLinks from './page-links'
import CompanyInfo from './company-info'
import FooterText from './footer-text'

export default function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 p-4 md:py-6 overflow-x-hidden container mx-auto max-w-9xl'">
        <div
          className="flex justify-center lg:justify-between overflow-x-hidden flex-wrap items-start w-[90vw] md:w-[80vw] mx-auto pb-2 
      "
        >
          <CompanyInfo />
          <PageLinks />
        </div>
        <FooterText />
      </div>
    </div>
  )
}
