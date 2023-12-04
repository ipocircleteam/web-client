import { RowDataType } from '@/components/Home-Page/IPOData/ipodata.types'

export default async function sanitizeData(data: any, length: number) {
  try {
    const arrayOfObjects = []
    const dataObject = data

    for (let i = 0; i < length; i++) {
      const openDate = new Date(dataObject[i].opening_date)
      const closeDate = new Date(dataObject[i].closing_date)
      const currentDate = new Date()
      let status = 'Closed'
      if (currentDate >= openDate && closeDate >= currentDate) status = 'Live'
      else if (currentDate > closeDate) status = 'Closed'
      else status = 'Upcoming'

      const object = {
        sno: i + 1,
        ipoID: dataObject[i].id,
        name: dataObject[i].name,
        opendate: dataObject[i].opening_date || '',
        enddate: dataObject[i].closing_date || '',
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
