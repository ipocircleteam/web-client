'use client'
import Footer from '@/components/Footer/footer'
import Menu from '@/components/Menu/menu'
import React from 'react'

export default function MarketAnalyser() {
  function scrollToDiv(targetId: string) {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 50

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    } else {
      console.error(`Element with ID "${targetId}" not found.`)
    }
  }

  return (
    <>
      <Menu />
      <div className="my-[60px]">
        {/* HERO SECTION */}
        <div className="bg-primary p-3 text-white h-[400px] flex justify-center items-center">
          <span className="text-center">
            <h1 className="font-bold text-[2.5rem] md:text-[3rem]">
              Market Analyser
            </h1>
            <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
              This is the small description about market analyser
            </p>
            <span>
              <button
                onClick={() => {
                  scrollToDiv('trackerGuide')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                How it works?
              </button>
              <button
                onClick={() => {
                  scrollToDiv('tracker')
                }}
                className="p-2 border m-2 rounded-md hover:text-primary hover:bg-white font-bold w-[150px]"
              >
                Let&apos;s go
              </button>
            </span>
          </span>
        </div>

        {/* TOOLS */}
      </div>
      <Footer />
    </>
  )
}
