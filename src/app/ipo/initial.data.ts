import {
  AnchorDetailsType,
  CompanyDetailsType,
  CompanyFinancialsType,
  Company_RegistrarContactType,
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
  face_value: 0,
  price_band: 0,
  lot_size_retails: 0,
  total_size: 0,
  fresh_issue: 0,
  ofs: 0,
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
  min_retail: 0,
  max_retail: 0,
  min_shni: 0,
  max_shni: 0,
  min_bhni: 0,
  max_bhni: 0,
}

export const PerformanceData: PerformanceIndicatorsType = {
  market_cap: 0,
  roe: 0,
  roce: 0,
  debt: 0,
  eps: 0,
  ronw: 0,
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
  nii_snii: 0,
  nii_bnii: 0,
  retail: 0,
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
  shares_offerred: 0,
  portion_size: 0,
  anchorLockIn_50per_30days: 0,
  anchorLockIn_50per_90days: 0,
}

export const IpoReservationData: IpoReservationType = {
  qib_shares_offerred: 0,
  nil_shares_offerred: 0,
  retail_shares_offerred: 0,
}

export const PromoterHoldingsData: PromoterHoldingsType = {
  preissue_share_holdings: 0,
  postissue_share_holdings: 0,
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
