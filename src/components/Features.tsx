import Image from 'next/image'
import { Dashboard } from '../../public/images'
import { FeaturesData } from '@/constants/data'

export default function Features() {
  return (
    <div className="my-[20px] mt-[2rem] lg:mt-[5rem] w-[80%] mb-[110px] container mx-auto max-w-9xl">
      <div className="text-center text-primary font-bold leading-tight text-[2rem] lg:mb-[50px]">
        <h1>Why you should trust us?</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="w-[100%] lg:w-[40%]">
          {FeaturesData.map((feat, index) => {
            return (
              <div key={`feat-` + index}>
                <section className="w-[100%] lg:w-[80%] mx-auto lg:mx-4 my-4">
                  <h1 className="text-primary font-semibold text-[1.5rem]">
                    {feat.title}
                  </h1>
                  <p>{feat.desc}</p>
                </section>
              </div>
            )
          })}
        </div>
        <div className="w-[100%] lg:w-[50%] h-[auto] lg:h-[350px] rounded-2xl border overflow-hidden">
          <Image src={Dashboard} alt="" />
        </div>
      </div>
    </div>
  )
}
