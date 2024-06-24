import Link from 'next/link'
import { ProductsData } from '@/constants/data'
import { ProductData } from '@/types/common'

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
              key={'prod-' + index}
            />
          )
        })}
      </section>
    </div>
  )
}
function ProductCard(props: ProductData) {
  return (
    <Link href={props.link}>
      <div className="w-[300px] h-[200px] hover:border border-secondary hover:bg-blue-100 bg-blue-50 cursor-pointer mx-[20px] my-[10px] rounded-lg justify-center flex flex-col items-center">
        <h1 className="text-secondary text-[1.5rem] font-semibold">
          {props.title}
        </h1>
        <p className="w-[80%] text-center">{props.desc}</p>
      </div>
    </Link>
  )
}
