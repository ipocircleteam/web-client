import sanitizeData from './getIpoStatus'
import dotenv from 'dotenv'
dotenv.config()

export default async function traverseData(
  start: number,
  end: number,
  dataType: string,
) {
  try {
    var data
    const uri = `${
      process.env.NEXT_PUBLIC_API_URL
    }/ipo/details?concise=true&type=${
      dataType === 'main' ? 'eq' : 'sme'
    }&start=${start}&end=${end}`

    await fetch(uri, {
      method: 'GET',
    })
      .then(async (res) => {
        const main = await res.json()
        data = await sanitizeData(main.data, 19)
      })
      .catch((error) => {
        throw Error(error)
      })
    return {
      data,
      success: true,
    }
  } catch (error) {
    console.log(error)
    return {
      data: [],
      success: false,
    }
  }
}
