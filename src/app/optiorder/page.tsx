import Banner from './banner'

export default function IpoPulse() {
  return (
    <div className="w-[100vw] container mx-auto">
      <Banner />
      <div className="mx-auto container max-w-9xl md:p-4">
        <div className="text-center w-[100%] my-[20px]">
          <h1 className="text-[18px] text-gray-500">How this works?</h1>
          <p className="text-gray-700 w-[50%] mx-auto">
            If there is any IPO for you to invest in, then the list of IPOs will
            show up below in order from highest priority to lowest
          </p>
        </div>
        <div className="w-[90%] mx-auto h-[400px] flex justify-center items-center border-2 border-secondary rounded-lg">
          <p className="text-center text-[20px] text-gray-400">No IPO open</p>
        </div>
      </div>
    </div>
  )
}
