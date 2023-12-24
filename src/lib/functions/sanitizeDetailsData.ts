import { ContentType } from '@/app/ipo/data.types'

export default async function sanitizeIpoDetailsData(content: any) {
  console.log(content.data.ipoData[0])
  console.log(content.data.financeData[0])

  const formattedData: ContentType = {
    CompanyDetailsData: {
      company_logo_url: content.data.ipoData[0].logo_url || '',
      company_name: content.data.ipoData[0].name || '',
      opening_date: content.data.ipoData[0].opening_date || '---',
      closing_date: content.data.ipoData[0].closing_date || '---',
      description: content.data.ipoData[0].description || '',
    },
    IpoDetailsData: {
      ipo_date: content.data.ipoData[0].listing_date || '',
      face_value: content.data.ipoData[0].face_value || 0,
      price_band: content.data.ipoData[0].priceband || 0,
      lot_size_retails: content.data.ipoData[0].shares_in_lot || 0,
      total_size: content.data.ipoData[0].total_issue || 0,
      fresh_issue: content.data.ipoData[0].fresh_issue || 0,
      ofs: content.data.ipoData[0].ofs || '',
      issue_type: content.data.ipoData[0].issue_type || '',
      listing_at: content.data.ipoData[0].listing_at || [],
    },
    IpoTimetableData: {
      open_date: content.data.ipoData[0].opening_date || '---',
      close_date: content.data.ipoData[0].closing_date || '---',
      allotment_date: content.data.ipoData[0].allotment_date || '',
      initiation_of_refunds: content.data.ipoData[0].init_refunds || '',
      credit_of: content.data.ipoData[0].credit_of || '',
      listing_date: content.data.ipoData[0].listing_date || '---',
      cutoff: content.data.ipoData[0].cutoffmandate || '',
      time_upf: content.data.ipoData[0].time_upf || '',
    },
    LotSizeData: {
      min_retail_lots: content.data.ipoData[0].min_retail_lots || 0,
      max_retail_lots: content.data.ipoData[0].max_retail_lots || 0,
      min_shni_lots: content.data.ipoData[0].min_shni_lots || 0,
      max_shni_lots: content.data.ipoData[0].max_shni_lots || 0,
      min_bhni_lots: content.data.ipoData[0].min_bhni_lots || 0,
      max_bhni_lots: content.data.ipoData[0].max_bhni_lots || 0,
      min_retail_shares: content.data.ipoData[0].min_retail_shares || 0,
      max_retail_shares: content.data.ipoData[0].max_retail_shares || 0,
      min_shni_shares: content.data.ipoData[0].min_shni_shares || 0,
      max_shni_shares: content.data.ipoData[0].max_shni_shares || 0,
      min_bhni_shares: content.data.ipoData[0].min_bhni_shares || 0,
      max_bhni_shares: content.data.ipoData[0].max_bhni_shares || 0,
      min_retail_price: content.data.ipoData[0].min_retail_price || 0,
      max_retail_price: content.data.ipoData[0].max_retail_price || 0,
      min_shni_price: content.data.ipoData[0].min_shni_price || 0,
      max_shni_price: content.data.ipoData[0].max_shni_price || 0,
      min_bhni_price: content.data.ipoData[0].min_bhni_price || 0,
      max_bhni_price: content.data.ipoData[0].max_bhni_price || 0,
    },
    PerformanceData: {
      market_cap: content.data.ipoData[0].market_cap || 0,
      roe: content.data.ipoData[0].roe || 0,
      roce: content.data.ipoData[0].roce || 0,
      debt: content.data.ipoData[0].debt || 0,
      eps: content.data.ipoData[0].eps || 0,
      ronw: content.data.ipoData[0].ronw || 0,
    },
    CompanyFinancialsData: {
      // completely missing
      period1: {
        date: '2023',
        assets: content.data.financeData[0].y2023.assets || 0,
        revenue: content.data.financeData[0].y2023.revenue || 0,
        profits_after_tax:
          content.data.financeData[0].y2023.profit_after_tax || 0,
        networth: content.data.financeData[0].y2023.networth || 0,
        reserves_and_surplus: content.data.financeData[0].y2023.reserves || 0,
        total_borrowings: content.data.financeData[0].y2023.borrowing || 0,
      },
      period2: {
        date: '2022',
        assets: content.data.financeData[0].y2022.assets || 0,
        revenue: content.data.financeData[0].y2022.revenue || 0,
        profits_after_tax:
          content.data.financeData[0].y2022.profit_after_tax || 0,
        networth: content.data.financeData[0].y2022.networth || 0,
        reserves_and_surplus: content.data.financeData[0].y2022.reserves || 0,
        total_borrowings: content.data.financeData[0].y2022.borrowing || 0,
      },
      period3: {
        date: '2021',
        assets: content.data.financeData[0].y2021.assets || 0,
        revenue: content.data.financeData[0].y2021.revenue || 0,
        profits_after_tax:
          content.data.financeData[0].y2021.profit_after_tax || 0,
        networth: content.data.financeData[0].y2021.networth || 0,
        reserves_and_surplus: content.data.financeData[0].y2021.reserves || 0,
        total_borrowings: content.data.financeData[0].y2021.borrowing || 0,
      },
      period4: {
        date: '2020',
        assets: content.data.financeData[0].y2020.assets || 0,
        revenue: content.data.financeData[0].y2020.revenue || 0,
        profits_after_tax:
          content.data.financeData[0].y2020.profit_after_tax || 0,
        networth: content.data.financeData[0].y2020.networth || 0,
        reserves_and_surplus: content.data.financeData[0].y2020.reserves || 0,
        total_borrowings: content.data.financeData[0].y2020.borrowing || 0,
      },
      period5: {
        date: '2019',
        assets: content.data.financeData[0].y2019.assets || 0,
        revenue: content.data.financeData[0].y2019.revenue || 0,
        profits_after_tax:
          content.data.financeData[0].y2019.profit_after_tax || 0,
        networth: content.data.financeData[0].y2019.networth || 0,
        reserves_and_surplus: content.data.financeData[0].y2019.reserves || 0,
        total_borrowings: content.data.financeData[0].y2019.borrowing || 0,
      },
    },
    SubscriptionsData: {
      qib: content.data.ipoData[0].qib || '',
      nii_snii: content.data.ipoData[0].nii_snii || 0,
      nii_bnii: content.data.ipoData[0].nii_bnii || 0,
      retail: content.data.ipoData[0].retail || 0,
    },
    DataPanelData: {
      IpoDetailsData: {
        ipo_date: content.data.ipoData[0].listing_date || '',
        face_value: content.data.ipoData[0].face_value || 0,
        price_band: content.data.ipoData[0].priceband || 0,
        lot_size_retails: content.data.ipoData[0].shares_in_lot || 0,
        total_size: content.data.ipoData[0].total_issue || 0,
        fresh_issue: content.data.ipoData[0].fresh_issue || 0,
        ofs: content.data.ipoData[0].ofs || '',
        issue_type: content.data.ipoData[0].issue_type || '',
        listing_at: content.data.ipoData[0].listing_at || [],
      },
      IpoTimetableData: {
        open_date: content.data.ipoData[0].opening_date || '---',
        close_date: content.data.ipoData[0].closing_date || '---',
        allotment_date: content.data.ipoData[0].allotment_date || '---',
        initiation_of_refunds: content.data.ipoData[0].init_refunds || '',
        credit_of: content.data.ipoData[0].credit_of || '',
        listing_date: content.data.ipoData[0].listing_date || '---',
        cutoff: content.data.ipoData[0].cutoffmandate || '',
        time_upf: content.data.ipoData[0].time_upf || '',
      },
      LotSizeData: {
        min_retail_lots: content.data.ipoData[0].min_retail_lots || 0,
        max_retail_lots: content.data.ipoData[0].max_retail_lots || 0,
        min_shni_lots: content.data.ipoData[0].min_shni_lots || 0,
        max_shni_lots: content.data.ipoData[0].max_shni_lots || 0,
        min_bhni_lots: content.data.ipoData[0].min_bhni_lots || 0,
        max_bhni_lots: content.data.ipoData[0].max_bhni_lots || 0,
        min_retail_shares: content.data.ipoData[0].min_retail_shares || 0,
        max_retail_shares: content.data.ipoData[0].max_retail_shares || 0,
        min_shni_shares: content.data.ipoData[0].min_shni_shares || 0,
        max_shni_shares: content.data.ipoData[0].max_shni_shares || 0,
        min_bhni_shares: content.data.ipoData[0].min_bhni_shares || 0,
        max_bhni_shares: content.data.ipoData[0].max_bhni_shares || 0,
        min_retail_price: content.data.ipoData[0].min_retail_price || 0,
        max_retail_price: content.data.ipoData[0].max_retail_price || 0,
        min_shni_price: content.data.ipoData[0].min_shni_price || 0,
        max_shni_price: content.data.ipoData[0].max_shni_price || 0,
        min_bhni_price: content.data.ipoData[0].min_bhni_price || 0,
        max_bhni_price: content.data.ipoData[0].max_bhni_price || 0,
      },
      PerformanceData: {
        market_cap: content.data.ipoData[0].market_cap || 0,
        roe: content.data.ipoData[0].roe || 0,
        roce: content.data.ipoData[0].roce || 0,
        debt: content.data.ipoData[0].debt || 0,
        eps: content.data.ipoData[0].eps || 0,
        ronw: content.data.ipoData[0].ronw || 0,
      },
      CompanyFinancialsData: {
        // completely missing
        period1: {
          date: '2023',
          assets: content.data.financeData[0].y2023.assets || 0,
          revenue: content.data.financeData[0].y2023.revenue || 0,
          profits_after_tax:
            content.data.financeData[0].y2023.profit_after_tax || 0,
          networth: content.data.financeData[0].y2023.networth || 0,
          reserves_and_surplus: content.data.financeData[0].y2023.reserves || 0,
          total_borrowings: content.data.financeData[0].y2023.borrowing || 0,
        },
        period2: {
          date: '2022',
          assets: content.data.financeData[0].y2022.assets || 0,
          revenue: content.data.financeData[0].y2022.revenue || 0,
          profits_after_tax:
            content.data.financeData[0].y2022.profit_after_tax || 0,
          networth: content.data.financeData[0].y2022.networth || 0,
          reserves_and_surplus: content.data.financeData[0].y2022.reserves || 0,
          total_borrowings: content.data.financeData[0].y2022.borrowing || 0,
        },
        period3: {
          date: '2021',
          assets: content.data.financeData[0].y2021.assets || 0,
          revenue: content.data.financeData[0].y2021.revenue || 0,
          profits_after_tax:
            content.data.financeData[0].y2021.profit_after_tax || 0,
          networth: content.data.financeData[0].y2021.networth || 0,
          reserves_and_surplus: content.data.financeData[0].y2021.reserves || 0,
          total_borrowings: content.data.financeData[0].y2021.borrowing || 0,
        },
        period4: {
          date: '2020',
          assets: content.data.financeData[0].y2020.assets || 0,
          revenue: content.data.financeData[0].y2020.revenue || 0,
          profits_after_tax:
            content.data.financeData[0].y2020.profit_after_tax || 0,
          networth: content.data.financeData[0].y2020.networth || 0,
          reserves_and_surplus: content.data.financeData[0].y2020.reserves || 0,
          total_borrowings: content.data.financeData[0].y2020.borrowing || 0,
        },
        period5: {
          date: '2019',
          assets: content.data.financeData[0].y2019.assets || 0,
          revenue: content.data.financeData[0].y2019.revenue || 0,
          profits_after_tax:
            content.data.financeData[0].y2019.profit_after_tax || 0,
          networth: content.data.financeData[0].y2019.networth || 0,
          reserves_and_surplus: content.data.financeData[0].y2019.reserves || 0,
          total_borrowings: content.data.financeData[0].y2019.borrowing || 0,
        },
      },
      SubscriptionsData: {
        qib: content.data.ipoData[0].qib || '',
        nii_snii: content.data.ipoData[0].nii_snii || 0,
        nii_bnii: content.data.ipoData[0].nii_bnii || 0,
        retail: content.data.ipoData[0].retail || 0,
      },
    },
    AnchorDetailsData: {
      bid_date: content.data.ipoData[0].anchor_bid_date || '',
      shares_offerred: content.data.ipoData[0].anchor_shares_offerred || 0,
      portion_size: content.data.ipoData[0].anchor_portion || 0,
      anchorLockIn_50per_30days:
        content.data.ipoData[0].anchor_lockin_half || 0,
      anchorLockIn_50per_90days:
        content.data.ipoData[0].anchor_lockin_rest || 0,
    },
    IppoReservationData: {
      qib_shares_offerred: content.data.ipoData[0].qib_shares_offerred || '',
      nil_shares_offerred: content.data.ipoData[0].nil_shares_offerred || '',
      retail_shares_offerred:
        content.data.ipoData[0].retail_shares_offerred || '',
    },
    PromoterHoldingsData: {
      preissue_share_holdings:
        content.data.ipoData[0].promoter_holding_pre || 0,
      postissue_share_holdings:
        content.data.ipoData[0].promoter_holding_post || 0,
    },
    ObjectIssueData: {
      text: content.data.ipoData[0].objectIssueData,
    },
    CompanyContactData: {
      name: content.data.ipoData[0].name || '',
      address: content.data.ipoData[0].company_address || '',
      phone: content.data.ipoData[0].company_phone || '',
      email: content.data.ipoData[0].company_email || '',
      website: content.data.ipoData[0].company_website || '',
    },
    RegistrarContactData: {
      name: content.data.ipoData[0].registrar_name || '',
      address: content.data.ipoData[0].registrar_address || '',
      phone: content.data.ipoData[0].registrar_phone || '',
      email: content.data.ipoData[0].registrar_email || '',
      website: content.data.ipoData[0].registrar_website || '',
    },
    DocumentsData: {
      rhp: content.data.ipoData[0].rhp || '',
      drhp: content.data.ipoData[0].drhp || '',
    },
    ReviewData: {
      review: '',
    },
    GmpData: content.data.ipoData[0].gmpData || [],
  }

  return formattedData
}
