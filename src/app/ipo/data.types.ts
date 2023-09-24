export type CompanyDetailsType = {
  company_logo_url: string
  company_name: string
  opening_date: string
  closing_date: string
  description: string
}

export type IpoDetailsType = {
  ipo_date: string
  face_value: number
  price_band: number
  lot_size_retails: number
  total_size: number
  fresh_issue: number
  ofs: number
  issue_type: string
  listing_at: number
}

export type IpoTimetableType = {
  open_date: string
  close_date: string
  allotment_date: string
  initiation_of_refunds: string
  credit_of: string
  listing_date: string
  cutoff: number
  time_upf: number
}

export type LotSizeType = {
  min_retail: number
  max_retail: number
  min_shni: number
  max_shni: number
  min_bhni: number
  max_bhni: number
}

export type PerformanceIndicatorsType = {
  market_cap: number
  roe: number
  roce: number
  debt: number
  eps: number
  ronw: number
}

type FinancialParametersType = {
  date: string
  assets: number
  revenue: number
  profits_after_tax: number
  networth: number
  reserves_and_surplus: number
  total_borrowings: number
}

export type CompanyFinancialsType = {
  period1: FinancialParametersType
  period2: FinancialParametersType
  period3: FinancialParametersType
  period4: FinancialParametersType
  period5: FinancialParametersType
}

export type SubscriptionsType = {
  qib: string
  nii_snii: number
  nii_bnii: number
  retail: number
}

export type DataPanelType = {
  IpoDetailsData: IpoDetailsType
  IpoTimetableData: IpoTimetableType
  LotSizeData: LotSizeType
  PerformanceData: PerformanceIndicatorsType
  CompanyFinancialsData: CompanyFinancialsType
  SubscriptionsData: SubscriptionsType
}

export type AnchorDetailsType = {
  bid_date: string
  shares_offerred: number
  portion_size: number
  anchorLockIn_50per_30days: number
  anchorLockIn_50per_90days: number
}

export type IpoReservationType = {
  qib_shares_offerred: number
  nil_shares_offerred: number
  retail_shares_offerred: number
}

export type PromoterHoldingsType = {
  preissue_share_holdings: number
  postissue_share_holdings: number
}

export type ObjectIssueType = {
  text: string
}

export type Company_RegistrarContactType = {
  name: string
  address: string
  phone: string
  email: string
  website: string
}

export type DocumentsDataType = {
  rhp: string
  drhp: string
}

export type ReviewType = {
  review: string
}

export type GmpDataType = {
  instant: string
  gmp: number
}

export type ContentType = {
  CompanyDetailsData: CompanyDetailsType
  IpoDetailsData: IpoDetailsType
  IpoTimetableData: IpoTimetableType
  LotSizeData: LotSizeType
  PerformanceData: PerformanceIndicatorsType
  CompanyFinancialsData: CompanyFinancialsType
  SubscriptionsData: SubscriptionsType
  DataPanelData: DataPanelType
  AnchorDetailsData: AnchorDetailsType
  IppoReservationData: IpoReservationType
  PromoterHoldingsData: PromoterHoldingsType
  ObjectIssueData: ObjectIssueType
  CompanyContactData: Company_RegistrarContactType
  RegistrarContactData: Company_RegistrarContactType
  DocumentsData: DocumentsDataType
  ReviewData: ReviewType
  GmpData: GmpDataType[]
}
