import { IpoWithStatus } from '@/types/ipodata'
import getIpoStatus from '@/utils/getIpoStatus'

interface IpoApiResponse {
  main: IpoWithStatus[]
  sme: IpoWithStatus[]
}

export const getIpoPreviewData = async (
  count: number,
): Promise<IpoApiResponse> => {
  const data: IpoApiResponse = {
    main: [],
    sme: [],
  }

  try {
    const [smeResponse, mainResponse] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=sme&count=7`,
        { cache: 'no-store' },
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=main&count=7`,
        { cache: 'no-store' },
      ),
    ])

    if (!smeResponse.ok || !mainResponse.ok) {
      throw new Error('Error fetching data!')
    }
    const [smeData, mainData] = await Promise.all([
      smeResponse.json(),
      mainResponse.json(),
    ])

    data.sme = await getIpoStatus(smeData.data, count)
    data.main = await getIpoStatus(mainData.data, count)

    return data
  } catch (error) {
    console.error('Error fetching getIpoPreviewData:', error)
    return data
  }
}
