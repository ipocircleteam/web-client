import Linegraph from './linegraph'
import Gmptable from './table'
import Upcoming from './upcoming'
import { data } from './data'

export default function GMP() {
  return (
    <>
      <div className="mx-auto container max-w-9xl p-4">
        <Upcoming data={data} />
        <Gmptable data={data} />
      </div>
    </>
  )
}
