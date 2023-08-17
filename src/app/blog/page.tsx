import Articles from '@/components/Blog/Article/articles'
import LatestArticles from '@/components/Blog/Latest/latest'
import ReadingList from '@/components/Blog/ReadingList/reading-list'
import Footer from '@/components/Footer/footer'
import Menu from '@/components/Menu/menu'
import React from 'react'

export default function Blog() {
  return (
    <>
      <Menu />
      <div className="flex flex-wrap justify-around items-start my-[10px]">
        <section className="w-[95vw] lg:w-[70vw]">
          <Articles />
        </section>

        <section className="w-[95vw] lg:w-[25vw] h-[100vh] lg:border-l-2 my-4">
          <LatestArticles />
        </section>
      </div>

      <Footer />
    </>
  )
}
