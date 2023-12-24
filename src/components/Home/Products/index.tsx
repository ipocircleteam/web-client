import { ProductsData } from '@/lib/constants/data'
import ProductCard from './productCard'

export default function Products() {
  return (
    <div
      className="md:my-[40px] mb-[60px] w-[100%] overflow-x-hidden container mx-auto max-w-9xl"
      id="features"
    >
      <h1 className="text-primary text-[2rem] font-bold text-center my-[20px]">
        Explore our tools
      </h1>

      <section className="flex flex-wrap justify-center items-center w-[90%] md:w-[80%] mx-auto">
        {ProductsData.map((item, index) => {
          return (
            <ProductCard
              title={item.title}
              link={item.link}
              desc={item.desc}
              key={'product-' + index}
            />
          )
        })}
      </section>
    </div>
  )
}
