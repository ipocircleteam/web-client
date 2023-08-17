export type TrackerDataType = {
  company: string
  listing: number
  dayend: number
  issue: number
  current: number
  sector: string
}

export type RowTemplateType = {
  data: TrackerDataType
  index: number
  darkMode: boolean
}
