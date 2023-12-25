import LargeMenu from './largeMenu'
import SmallMenu from './smallMenu'

export default function Menu() {
  return (
    <div className="top-0 z-50 bg-white w-[100vw] mx-auto max-w-9l">
      <div className="hidden w-[100%] lg:block">
        <LargeMenu />
      </div>
      <div className="block w-[100%] lg:hidden">
        <SmallMenu />
      </div>
    </div>
  )
}
