'use client'

export default function Banner() {
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
    <div className="bg-primary p-3 text-white h-[300px] flex justify-center items-center">
      <span className="text-center">
        <h1 className="font-bold text-[35px] md:text-[3rem]">IPO Pulse</h1>
        <p className="text-[15px] md:text-[18px] w-[90%] md:w-[75%] mb-[20px] lg:w-[60%] mx-auto">
          Unlock strategic IPO investments with our priority list, meticulously
          crafted based on the probability of allotment and potential profit –
          IPO Circle&apos;s key to smart investing.
        </p>
        <span>
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
  )
}
