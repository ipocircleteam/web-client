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

  const promiseArray =
    count === 0
      ? [
          fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=sme`,
            { cache: 'no-store' },
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=main`,
            { cache: 'no-store' },
          ),
        ]
      : [
          fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=sme&count=${count}`,
            { cache: 'no-store' },
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ipo?concise=true&type=main&count=${count}`,
            { cache: 'no-store' },
          ),
        ]

  try {
    const [smeResponse, mainResponse] = await Promise.all(promiseArray)

    if (!smeResponse.ok || !mainResponse.ok) {
      throw new Error('Error fetching data!')
    }
    const [smeData, mainData] = await Promise.all([
      smeResponse.json(),
      mainResponse.json(),
    ])

    data.sme = await getIpoStatus(
      smeData.data,
      count === 0 ? smeData.data.length : count,
    )
    data.main = await getIpoStatus(
      mainData.data,
      count === -0 ? mainData.data.length : count,
    )

    return data
  } catch (error) {
    console.error('Error fetching getIpoPreviewData:', error)
    return data
  }
}
