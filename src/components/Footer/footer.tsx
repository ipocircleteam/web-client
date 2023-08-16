import Image from 'next/image'
import React from 'react'
import { Logo } from '../../../public/logo'
import Link from 'next/link'
import PageLinks from './page-links'
import CompanyInfo from './company-info'
import FooterText from './footes-text'

export default function Footer() {
  return (
    <section className="bg-gray-200 p-4 md:py-6 overflow-x-hidden">
      <div
        className="flex justify-center lg:justify-between overflow-x-hidden flex-wrap items-start w-[90vw] md:w-[80vw] mx-auto pb-2 
      border border-b-primary"
      >
        <CompanyInfo />
        <PageLinks />
      </div>
      <FooterText />
    </section>
  )
}
