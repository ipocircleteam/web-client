import LargeMenu from './large-menu'
import SmallMenu from './small.menu'

export default function Menu() {
  return (
    <div className="top-0 z-50 bg-white w-[100vw] container mx-auto max-w-9l">
      <div className="hidden lg:block">
        <LargeMenu />
      </div>
      <div className="block lg:hidden">
        <SmallMenu />
      </div>
    </div>
  )
}
