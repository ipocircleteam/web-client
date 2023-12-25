import Linegraph from '../../components/GMP/linegraph'
import Gmptable from '../../components/GMP/table'
import Upcoming from '../../components/GMP/upcoming'
import { data } from '../../components/GMP/data'
import Banner from '../../components/GMP/banner'

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
