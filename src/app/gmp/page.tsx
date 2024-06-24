import Linegraph from '../../components/STALE/GMP/linegraph'
import Gmptable from '../../components/STALE/GMP/table'
import Upcoming from '../../components/STALE/GMP/upcoming'
import { data } from '../../components/STALE/GMP/data'
import Banner from '../../components/STALE/GMP/banner'

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
