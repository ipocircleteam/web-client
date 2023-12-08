import Linegraph from './linegraph'
import Gmptable from './table'
import Upcoming from './upcoming'
import { data } from './data'
import Banner from './banner'

export default function GMP() {
  return (
    <div className="w-[100vw] mx-auto container">
      <Banner />
      <div className="mx-auto container max-w-9xl md:p-4">
        <Upcoming data={data} />
        <Gmptable data={data} />
      </div>
    </div>
  )
}
