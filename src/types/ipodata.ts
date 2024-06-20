export interface Ipo {
  id: string
  name: string
  closing_date: Date
  opening_date: Date
  description: string
  finance: string
}

export type IpoPreview = Pick<
  Ipo,
  'id' | 'name' | 'closing_date' | 'opening_date'
>

export type IpoListRow = {
  sno: number
  ipoID: string
  name: string
  opendate: string
  enddate: string
  status: string
}

export type TableDataType = {
  type: string
}

export type IpoCategoryProps = {
  callback: (name: string) => void
}

export type IpoConciseDetails = {
  ipo_id: string
  name: string
  series: string
  opening_date: string
  closing_date: string
  status?: string
}

export interface IpoStatusFields {
  sno: number
  status: string
}

export type IpoWithStatus = Omit<IpoConciseDetails, 'series'> & IpoStatusFields

export interface IpoPreviewProps {
  main: IpoWithStatus[]
  sme: IpoWithStatus[]
}
