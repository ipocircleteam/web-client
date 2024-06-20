import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

export default function Header() {
  return (
    <div className="top-0 z-50 bg-white w-[100vw] mx-auto max-w-9l">
      <div className="hidden w-[100%] lg:block">
        <DesktopHeader />
      </div>
      <div className="block w-[100%] lg:hidden">
        <MobileHeader />
      </div>
    </div>
  )
}
