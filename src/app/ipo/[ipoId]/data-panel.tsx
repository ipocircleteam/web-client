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

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function DataPanel() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div id="dataTables" className="hidden lg:block">
      <label className="text-primary text-[1.2rem] font-bold">
        Data Tables
      </label>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className=""
          >
            <Tab label="IPO Details" {...a11yProps(0)} />
            <Tab label="Timetable" {...a11yProps(1)} />
            <Tab label="Lot Size" {...a11yProps(2)} />
            <Tab label="Performance Indicators" {...a11yProps(3)} />
            <Tab label="Subscriptions" {...a11yProps(4)} />
            <Tab label="Company Financials" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <IpoDetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <IpoTimeTable />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <LotSize />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <PerformanceIndicators />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Subscriptions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <CompanyFinancials />
        </CustomTabPanel>
      </Box>
    </div>
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
