export type TrackerDataType = {
  id: number
  company: string
  listing: number
  dayend: number
  issue: number
  current: number
  sector: string
  year: number
}

export type RowTemplateType = {
  data: TrackerDataType
  index: number
  darkMode: boolean
}
