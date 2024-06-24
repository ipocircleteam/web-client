// import GmpCard from '@/components/IpoTracker/GmpPverview/gmpCard'

export default function GmpOverview() {
  const data = [
    {
      name: 'Total IPOs',
      stats: {
        ipos: 170,
        positive: 151,
        negative: 16,
        above_gmp: 93,
        below_gmp: 74,
      },
    },

    {
      name: 'Mainline IPOs',
      stats: {
        ipos: 45,
        positive: 40,
        negative: 5,
        above_gmp: 25,
        below_gmp: 20,
      },
    },

    {
      name: 'SME IPOs',
      stats: {
        ipos: 125,
        positive: 111,
        negative: 11,
        above_gmp: 68,
        below_gmp: 54,
      },
    },
  ]

  return (
    <div className="flex flex-wrap w-[80%] mx-auto justify-between items-center my-[30px]">
      {data.map((item, index) => {
        return <></>
        // return <GmpCard key={`ipoType-${index}`} data={item} />
      })}
    </div>
  )
}
