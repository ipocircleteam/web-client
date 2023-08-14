import Image from 'next/image'
import React from 'react'
import { Logo } from '../../../public/logo'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Blog } from '../../../public/icons'

export default function Footer() {
  return (
    <section className="bg-gray-200 p-4 py-6 overflow-x-hidden">
      <div
        className="flex justify-center lg:justify-between flex-wrap items-start w-[100vw] md:w-[80vw] mx-auto pb-2 
      border border-b-primary"
      >
        <CompanyInfo />
        <PageLinks />
      </div>
      <Para />
    </section>
  )
}

function SocialLinks() {
  return (
    <div className="flex justify-start items-center py-1">
      <Link title="Linkedin" href="/linkedin" className="mr-2 cursor-pointer">
        <Image src={Linkedin} alt="" width={15} height={15} />
      </Link>
      <Link title="Twitter" href="/twitter" className="mr-2 cursor-pointer">
        <Image src={Twitter} alt="" width={15} height={15} />
      </Link>
      <Link title="Instagram" href="/instagram" className="mr-2 cursor-pointer">
        <Image src={Instagram} alt="" width={15} height={15} />
      </Link>
      <Link title="Blog" href="/blog" className="mr-2 cursor-pointer">
        <Image src={Blog} alt="" width={15} height={15} />
      </Link>
    </div>
  )
}

function CompanyInfo() {
  return (
    <div className="flex flex-col justify-between p-4 sm:w-[50%]">
      <Image src={Logo} alt="" width={400} />
      <div className="mx-2">
        <p>&#169; {new Date().getFullYear()} IPOCircle. All rights reserved</p>
        <SocialLinks />
        <p>support@ipocircle.com</p>
        <p>Chandigarh, India</p>
      </div>
    </div>
  )
}

function PageLinks() {
  return (
    <div className="flex justify-around items-start p-4 sm:w-[50%]">
      <div className="flex flex-col">
        <h1 className="font-semibold">Company</h1>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/legal">Legal</Link>
        <Link href="/privacypolicy">Privacy</Link>
      </div>

      <div className="flex flex-col">
        <h1 className="font-semibold">Support</h1>
        <Link href="/help">Help Center</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="flex flex-col">
        <h1 className="font-semibold">Learn</h1>
        <Link href="/article1">Article1</Link>
        <Link href="/article2">Article2</Link>
        <Link href="/article3">Article3</Link>
      </div>
    </div>
  )
}

function Para() {
  return (
    <p className="w-[100vw] md:w-[80vw] text-[14px] mx-auto">
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis
      lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a
      mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum
      mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat
      pharetra, tortor dolor semper urna, at ultrices est erat id nisi.
      Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla
      vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus.
      Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium
      lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex
      quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam
      pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis
      augue, quis tincidunt diam. Nulla facilisi.
      <br />
      <br /> Phasellus viverra et ligula eu scelerisque. Ut interdum euismod
      lacus nec dignissim. Vivamus iaculis rhoncus dui, sit amet fringilla neque
      consequat non. Proin id metus sapien. Ut id leo malesuada, facilisis
      tellus eu, accumsan sem. Donec facilisis vitae lacus vitae ullamcorper.
      Aliquam semper nunc ex, eget faucibus augue elementum non. Aenean
      fermentum enim sed malesuada ultricies. Nunc pulvinar nisi eget pulvinar
      pellentesque. In fermentum interdum nunc. Aliquam erat volutpat. Donec at
      laoreet elit. Morbi quis elit nibh. Quisque mollis eget elit vitae
      placerat. Phasellus pellentesque nisi odio, eget pharetra tortor
      scelerisque at. Fusce nunc diam, bibendum efficitur tempus vitae, tempus
      gravida orci. Ut nisi lacus, cursus non neque eget, faucibus elementum
      tortor.
      <br />
      <br />
      In nec maximus leo. Maecenas molestie orci vel pellentesque accumsan.
      Quisque eget porttitor nulla. Vivamus eget interdum mauris, vel ultricies
      dui. Cras finibus at sem sed imperdiet. Quisque tempus condimentum arcu et
      blandit. Suspendisse dolor metus, cursus id aliquam vel, pretium ut
      mauris. Donec accumsan eros felis, et elementum lacus venenatis ac. Duis
      volutpat tellus odio, quis pellentesque ipsum suscipit quis. Morbi non
      eleifend erat. Aliquam justo arcu, bibendum laoreet libero a, venenatis
      porttitor risus. Praesent scelerisque nec quam in blandit. Nam iaculis
      sagittis lorem. Quisque sed lorem sit amet odio tristique posuere eu quis
      nibh. In sit amet libero at enim malesuada malesuada ac fermentum orci.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. In in ante enim. Morbi dictum turpis et
      orci convallis vulputate. Praesent eget egestas nisi. Donec pellentesque
      dolor a interdum suscipit. Nulla fringilla quam tortor, laoreet faucibus
      odio efficitur id.
    </p>
  )
}
