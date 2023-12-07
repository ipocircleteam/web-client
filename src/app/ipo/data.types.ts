export type CompanyDetailsType = {
  company_logo_url: string
  company_name: string
  opening_date: string
  closing_date: string
  description: string
}

export type IpoDetailsType = {
  ipo_date: string
  face_value: string
  price_band: string
  lot_size_retails: string
  total_size: string
  fresh_issue: string
  ofs: string
  issue_type: string
  listing_at: string[]
}

export type IpoTimetableType = {
  open_date: string
  close_date: string
  allotment_date: string
  initiation_of_refunds: string
  credit_of: string
  listing_date: string
  cutoff: string
  time_upf: string
}

export type LotSizeType = {
  min_retail_lots: string
  max_retail_lots: string
  min_shni_lots: string
  max_shni_lots: string
  min_bhni_lots: string
  max_bhni_lots: string
  min_retail_shares: string
  max_retail_shares: string
  min_shni_shares: string
  max_shni_shares: string
  min_bhni_shares: string
  max_bhni_shares: string
  min_retail_price: string
  max_retail_price: string
  min_shni_price: string
  max_shni_price: string
  min_bhni_price: string
  max_bhni_price: string
}

export type PerformanceIndicatorsType = {
  market_cap: string
  roe: string
  roce: string
  debt: string
  eps: string
  ronw: string
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
  nii_snii: string
  nii_bnii: string
  retail: string
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
  shares_offerred: string
  portion_size: string
  anchorLockIn_50per_30days: string
  anchorLockIn_50per_90days: string
}

export type IpoReservationType = {
  qib_shares_offerred: string
  nil_shares_offerred: string
  retail_shares_offerred: string
}

export type PromoterHoldingsType = {
  preissue_share_holdings: string
  postissue_share_holdings: string
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
