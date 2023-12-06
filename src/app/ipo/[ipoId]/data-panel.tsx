'use client'

import React from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IpoDetails from './tables/ipo-details'
import IpoTimeTable from './tables/ipo-timetable'
import LotSize from './tables/lot-size'
import PerformanceIndicators from './tables/performance'
import CompanyFinancials from './company-financials'
import Subscriptions from './tables/subscriptions'
import AnchorDetails from './tables/anchor-details'
import IpoReservation from './tables/ipo-reservation'
import PromoterHoldings from './tables/promoter-holdings'

import {
  AnchorDetailsType,
  CompanyDetailsType,
  DataPanelType,
  IpoReservationType,
  PromoterHoldingsType,
} from '../data.types'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function DataPanel(props: {
  data: DataPanelType
  companyData: CompanyDetailsType
  AnchorDetailsData: AnchorDetailsType
  IpoReservationData: IpoReservationType
  PromoterHoldingsData: PromoterHoldingsType
}) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="w-[95%] mx-auto mb-[30px]">
        <p className="text-justify mdlg:text-left">
          {props.companyData.description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia
          nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt
          elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id
          volutpat pharetra, tortor dolor semper urna, at ultrices est erat id
          nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac
          fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet
          non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula
          feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante
          finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus
          pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula
          porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla
          facilisi.
        </p>
      </div>

      <div id="dataTables" className="hidden lg:block">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className=""
            >
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Timetable" {...a11yProps(1)} />
              <Tab label="Lot Size" {...a11yProps(2)} />
              <Tab label="Performance " {...a11yProps(3)} />
              <Tab label="Subscriptions" {...a11yProps(4)} />
              <Tab label="Company Financials" {...a11yProps(5)} />
              <Tab label="Anchor Details" {...a11yProps(6)} />
              <Tab label="Reservations" {...a11yProps(7)} />
              <Tab label="Promoter Holdings" {...a11yProps(8)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <IpoDetails data={props.data.IpoDetailsData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <IpoTimeTable data={props.data.IpoTimetableData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <LotSize data={props.data.LotSizeData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <PerformanceIndicators data={props.data.PerformanceData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Subscriptions data={props.data.SubscriptionsData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <CompanyFinancials data={props.data.CompanyFinancialsData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <AnchorDetails data={props.AnchorDetailsData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            <IpoReservation data={props.IpoReservationData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={8}>
            <PromoterHoldings data={props.PromoterHoldingsData} />
          </CustomTabPanel>
        </Box>
      </div>
    </>
  )
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
