export default function HomeHero() {
  return (
    <div className="mt-[45px] md:my-[50px] md:mt-[5rem] md:mb-0 text-center container mx-auto max-w-9xl">
      <div className="flex justify-center items-center w-[85%] sm:w-[95%] mx-auto">
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1] ">
          <label className="text-primary">Unlock </label>
          <label className="text-secondary">Your IPO Advantage</label>
        </h1>
      </div>

      <p
        className="my-4 md:my-2 text-[1rem] md:text-[1.5rem] leading-tight text- 
        w-[90%] sm:w-[95%] mx-auto"
      >
        Uniting Tools, Data, and Research at your fingertips
      </p>
      <div className="my-4">
        <a
          href="#features"
          className="mx-4 text-[1.6rem] md:text-[1.1rem] bg-secondary py-2 px-4 font-semibold rounded-lg border border-secondary
            hover:bg-base hover:border-secondary custom-btn-transition text-base hover:text-primary"
        >
          Start Your IPO Journey
        </a>
      </div>
    </div>
  )
}
