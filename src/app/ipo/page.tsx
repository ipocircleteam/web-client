import { IpoPreviewProps } from '@/types/ipodata'
import { getIpoPreviewData } from '@/services/ipoService'
import IpoListWithSearch from '@/components/IpoListWithSearch'

async function fetchData(): Promise<IpoPreviewProps> {
  const { main, sme } = await getIpoPreviewData(0)
  return { main, sme }
}

export default async function IPO() {
  const { main, sme } = await fetchData()
  return (
    <>
      <div className="w-[90%] mx-auto">
        <IpoListWithSearch main={main} sme={sme} />
      </div>
    </>
  )
}
