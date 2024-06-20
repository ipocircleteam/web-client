import { IpoConciseDetails, IpoWithStatus } from '@/types/ipodata'

export default async function getIpoStatus(
  data: IpoConciseDetails[],
  length: number,
) {
  try {
    const arrayOfObjects: IpoWithStatus[] = []
    const dataObject = data
    const entryCount = length > dataObject.length ? dataObject.length : length

    for (let i = 0; i < entryCount; i++) {
      const openDate = new Date(dataObject[i].opening_date)
      const closeDate = new Date(dataObject[i].closing_date)
      const currentDate = new Date()
      var status

      if (currentDate >= openDate && closeDate >= currentDate) status = 'Live'
      else if (currentDate > openDate && currentDate > closeDate)
        status = 'Closed'
      else status = 'Upcoming'

      const object = {
        sno: i + 1,
        ipo_id: dataObject[i].ipo_id,
        name: dataObject[i].name,
        opening_date: dataObject[i].opening_date || '---',
        closing_date: dataObject[i].closing_date || '---',
        status: status,
      }
      arrayOfObjects.push(object)
    }
    return arrayOfObjects
  } catch (error) {
    console.log(error)
    return []
  }
}
