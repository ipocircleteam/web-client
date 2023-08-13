export type RowDataType = {
  sno: number
  ipoID: string
  name: string
  lotprice: number
  sta: number
  application: number
  enddate: string
  status: string
}

export type TableDataType = {
  type: string
}

export type IpoCategoryProps = {
  callback: (name: string) => void
}
