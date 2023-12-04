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
        <h1 className="font-bold text-[2.5rem] md:text-[3rem]">IPO Tracker</h1>
        <p className="font-semibold text-[1.2rem] md:text-[1.5rem]">
          This is the small description about IPO Tracker
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
