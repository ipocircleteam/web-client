export type TrackerDataType = {
  id: number
  company_name: string
  listing_price: number
  dayend_price: number
  issue_price: number
  current_price: number
  sector: string
  year: number
}

export type RowTemplateType = {
  data: TrackerDataType
  index: number
  darkMode: boolean
}
