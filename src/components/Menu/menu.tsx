import LargeMenu from './large-menu'
import SmallMenu from './small.menu'

export default function Menu() {
  return (
    <div className="fixed top-0 z-50 bg-white">
      <div className="hidden md:block">
        <LargeMenu />
      </div>
      <div className="block md:hidden">
        <SmallMenu />
      </div>
    </div>
  )
}
