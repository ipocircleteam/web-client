import { ProductsData } from '@/dummydata'
import React from 'react'
import ProductCard from './productCard'

export default function Products() {
  return (
    <div className="my-[50px] w-[100vw] overflow-x-hidden" id="features">
      <h1 className="text-primary text-[2rem] font-bold text-center my-[20px]">
        Explore our tools
      </h1>

      <section className="flex flex-wrap justify-around items-center w-[90vw] md:w-[80vw] mx-auto">
        {ProductsData.map((item, index) => {
          return (
            <ProductCard
              title={item.title}
              link={item.link}
              key={'product-' + index}
            />
          )
        })}
      </section>
    </div>
  )
}
