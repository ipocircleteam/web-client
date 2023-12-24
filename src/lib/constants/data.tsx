import { ProductDataType } from '../../components/Home/Products/product.types'

export const ipoDetailsItems: {
  text: string
  id: string
}[] = [
  {
    text: 'Statistics',
    id: 'dataTables',
  },
  // {
  //   text: 'GMP',
  //   id: 'gmp',
  // },
  // {
  //   text: 'Anchor Details',
  //   id: 'anchorDetails',
  // },
  // {
  //   text: 'IPO Reservation',
  //   id: 'ipoReservation',
  // },
  // {
  //   text: 'Promoter Holdings',
  //   id: 'promoterHoldings',
  // },
  {
    text: 'Object of Issue',
    id: 'objectOfIssue',
  },
  {
    text: 'Contacts',
    id: 'companyContact',
  },
  // {
  //   text: 'Registrar Contact',
  //   id: 'registrarContact',
  // },
  // {
  //   text: 'Documents',
  //   id: 'documents',
  // },
  // {
  //   text: 'Review',
  //   id: 'ourReview',
  // },
  // {
  //   text: 'Discussions',
  //   id: 'discussions',
  // },
]

export const ProductsData: ProductDataType[] = [
  {
    title: 'IPO Tracker',
    link: '/ipotracker',
    desc: 'Know past and current_price performing IPOs',
  },
  {
    title: 'GMP Analyser',
    link: '/gmp',
    desc: 'GMP Analysis tool for upcoming IPOs',
  },
  {
    title: 'IPO Pulse',
    link: '/optiorder',
    desc: 'Priority list to help you make smart choices',
  },
  {
    title: 'Ask Maverick',
    link: '/algorithm',
    desc: 'Algorithm driven IPO investing strategies',
  },
  {
    title: 'Much More',
    link: '/',
    desc: 'Will be adding more tools to this list',
  },
]

export const Sectors = [
  'Agri',
  'Alcohol',
  'Automobiles & Ancillaries',
  'Aviation',
  'Banks',
  'Capital Goods',
  'Chemical',
  'Construcion Materials',
  'Consumer Durables',
  'Containers & Packaging',
  'Diamond & Jewellery',
  'Diversified',
  'Electricals',
  'ETF',
  'Finance',
  'FMCG',
  'Footwear',
  'Healthcare',
  'Hospitality',
  'Industrial Gases & Fuels',
  'Infrastructure',
  'Insurance',
  'Logistics',
  'Manufacturing',
  'Media & Entertainment',
  'Metals & Mining',
  'Miscellaneous',
  'Oil & Gas',
  'Paper',
  'Photographic Products',
  'Plastic Products',
  'Power',
  'Real Estate',
  'Retailing',
  'Ship Building',
  'Software & IT Services',
  'Telecom',
  'Textiles',
  'Trading',
]
