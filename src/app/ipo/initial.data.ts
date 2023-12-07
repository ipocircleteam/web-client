import {
  AnchorDetailsType,
  CompanyDetailsType,
  CompanyFinancialsType,
  Company_RegistrarContactType,
  ContentType,
  DataPanelType,
  DocumentsDataType,
  GmpDataType,
  IpoDetailsType,
  IpoReservationType,
  IpoTimetableType,
  LotSizeType,
  ObjectIssueType,
  PerformanceIndicatorsType,
  PromoterHoldingsType,
  ReviewType,
  SubscriptionsType,
} from './data.types'

export const CompanyDetailsData: CompanyDetailsType = {
  company_logo_url: '',
  company_name: '',
  opening_date: '',
  closing_date: '',
  description: '',
}

export const IpoDetailsData: IpoDetailsType = {
  ipo_date: '',
  face_value: '',
  price_band: '',
  lot_size_retails: '',
  total_size: '',
  fresh_issue: '',
  ofs: '',
  issue_type: '',
  listing_at: [],
}

export const IpoTimetableData: IpoTimetableType = {
  open_date: '',
  close_date: '',
  allotment_date: '',
  initiation_of_refunds: '',
  credit_of: '',
  listing_date: '',
  cutoff: '',
  time_upf: '',
}

export const LotSizeData: LotSizeType = {
  min_retail_lots: '',
  max_retail_lots: '',
  min_shni_lots: '',
  max_shni_lots: '',
  min_bhni_lots: '',
  max_bhni_lots: '',
  min_retail_shares: '',
  max_retail_shares: '',
  min_shni_shares: '',
  max_shni_shares: '',
  min_bhni_shares: '',
  max_bhni_shares: '',
  min_retail_price: '',
  max_retail_price: '',
  min_shni_price: '',
  max_shni_price: '',
  min_bhni_price: '',
  max_bhni_price: '',
}

export const PerformanceData: PerformanceIndicatorsType = {
  market_cap: '',
  roe: '',
  roce: '',
  debt: '',
  eps: '',
  ronw: '',
}

export const CompanyFinancialData: CompanyFinancialsType = {
  period1: {
    date: '',
    assets: 0,
    revenue: 0,
    profits_after_tax: 0,
    networth: 0,
    reserves_and_surplus: 0,
    total_borrowings: 0,
  },
  period2: {
    date: '',
    assets: 0,
    revenue: 0,
    profits_after_tax: 0,
    networth: 0,
    reserves_and_surplus: 0,
    total_borrowings: 0,
  },
  period3: {
    date: '',
    assets: 0,
    revenue: 0,
    profits_after_tax: 0,
    networth: 0,
    reserves_and_surplus: 0,
    total_borrowings: 0,
  },
  period4: {
    date: '',
    assets: 0,
    revenue: 0,
    profits_after_tax: 0,
    networth: 0,
    reserves_and_surplus: 0,
    total_borrowings: 0,
  },
  period5: {
    date: '',
    assets: 0,
    revenue: 0,
    profits_after_tax: 0,
    networth: 0,
    reserves_and_surplus: 0,
    total_borrowings: 0,
  },
}

export const SubscriptionsData: SubscriptionsType = {
  qib: '',
  nii_snii: '',
  nii_bnii: '',
  retail: '',
}

export const DataPanelData: DataPanelType = {
  IpoDetailsData: IpoDetailsData,
  IpoTimetableData: IpoTimetableData,
  LotSizeData: LotSizeData,
  PerformanceData: PerformanceData,
  CompanyFinancialsData: CompanyFinancialData,
  SubscriptionsData: SubscriptionsData,
}

export const AnchorDetailsData: AnchorDetailsType = {
  bid_date: '',
  shares_offerred: '',
  portion_size: '',
  anchorLockIn_50per_30days: '',
  anchorLockIn_50per_90days: '',
}

export const IpoReservationData: IpoReservationType = {
  qib_shares_offerred: '',
  nil_shares_offerred: '',
  retail_shares_offerred: '',
}

export const PromoterHoldingsData: PromoterHoldingsType = {
  preissue_share_holdings: '',
  postissue_share_holdings: '',
}

export const ObjectIssueData: ObjectIssueType = {
  text: '',
}

export const CompanyContactData: Company_RegistrarContactType = {
  name: '',
  address: '',
  phone: '',
  email: '',
  website: '',
}

export const RegistrarContactData: Company_RegistrarContactType = {
  name: '',
  address: '',
  phone: '',
  email: '',
  website: '',
}

export const DocumentsData: DocumentsDataType = {
  rhp: '',
  drhp: '',
}

export const ReviewData: ReviewType = {
  review: '',
}

export const GmpData: GmpDataType[] = [
  {
    instant: 'T1',
    gmp: 2400,
  },
  {
    instant: 'T2',
    gmp: 1398,
  },
  {
    instant: 'T3',
    gmp: 9800,
  },
]

export const InitialDetailsData: ContentType = {
  CompanyDetailsData: CompanyDetailsData,
  IpoDetailsData: IpoDetailsData,
  IpoTimetableData: IpoTimetableData,
  LotSizeData: LotSizeData,
  PerformanceData: PerformanceData,
  CompanyFinancialsData: CompanyFinancialData,
  SubscriptionsData: SubscriptionsData,
  DataPanelData: DataPanelData,
  AnchorDetailsData: AnchorDetailsData,
  IppoReservationData: IpoReservationData,
  PromoterHoldingsData: PromoterHoldingsData,
  ObjectIssueData: ObjectIssueData,
  CompanyContactData: CompanyContactData,
  RegistrarContactData: RegistrarContactData,
  DocumentsData: DocumentsData,
  ReviewData: ReviewData,
  GmpData: GmpData,
}
