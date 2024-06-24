import { ProductData, FeaturesDesc } from '@/types/common'

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

export const ProductsData: ProductData[] = [
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

export const FeaturesData: FeaturesDesc[] = [
  {
    title: 'Data backed decisions',
    desc: 'Our every advice is deep rooted onto previous data set and trends.',
  },
  {
    title: 'Subjective customisation',
    desc: 'We consider your risk profile, ammount to be invested, etc to help you increase profit probability',
  },
  {
    title: 'In depth analysis',
    desc: 'Highly interactive and beginner friendly graphs helps you to take smart decisions.',
  },
]
