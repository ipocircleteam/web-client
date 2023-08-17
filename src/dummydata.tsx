import { RowDataType } from './components/Home-Page/IPOData/ipodata.types'
import { BlogDataType } from './components/Home-Page/Articles/article.types'
import { ProductDataType } from './components/Home-Page/Products/product.types'
import { ArticleDataType } from './components/Blog/article.types'
import { TrackerDataType } from './components/IpoTracker/TrackerTable/table.types'

// HOME PAGE IPO TABLE - MAIN VIEW
export const mainipodata: RowDataType[] = [
  {
    sno: 1,
    ipoID: 'ipo00123',
    name: 'Mercedes',
    opendate: '18 Aug 2023',
    enddate: '27 Aug 2023',
    status: 'Upcoming',
  },
  {
    sno: 2,
    ipoID: 'ipo00123',
    name: 'Piyush Associates',
    opendate: '17 Aug 2023',
    enddate: '28 Aug 2023',
    status: 'Upcoming',
  },
  {
    sno: 3,
    ipoID: 'ipo00123',
    name: 'IPOCircle Inc',
    opendate: '12 Aug 2023',
    enddate: '19 Aug 2023',
    status: 'Live',
  },
  {
    sno: 4,
    ipoID: 'ipo00123',
    name: 'Tesla',
    opendate: '12 Aug 2023',
    enddate: '15 Aug 2023',
    status: 'Live',
  },
  {
    sno: 5,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
  {
    sno: 6,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
  {
    sno: 7,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
]

// HOME PAGE IPO TABLE - SME VIEW
export const smeipodata: RowDataType[] = [
  {
    sno: 1,
    ipoID: 'ipo00123',
    name: 'Mercedes SME',
    opendate: '15 Aug 2023',
    enddate: '26 Aug 2023',
    status: 'Upcoming',
  },
  {
    sno: 2,
    ipoID: 'ipo00123',
    name: 'Piyush SME',
    opendate: '17 Aug 2023',
    enddate: '28 Aug 2023',
    status: 'Upcoming',
  },
  {
    sno: 3,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '12 Aug 2023',
    enddate: '25 Aug 2023',
    status: 'Live',
  },
  {
    sno: 4,
    ipoID: 'ipo00123',
    name: 'Tesla',
    opendate: '12 Aug 2023',
    enddate: '15 Aug 2023',
    status: 'Live',
  },
  {
    sno: 5,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
  {
    sno: 6,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
  {
    sno: 7,
    ipoID: 'ipo00123',
    name: 'IPOCircle',
    opendate: '1 Aug 2023',
    enddate: '12 Aug 2023',
    status: 'Closed',
  },
]

// HOME PAGE BLOG
export const blogData: BlogDataType[] = [
  {
    id: '1',
    title: 'Expected returns on TVS',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget odio in risus efficitur faucibus. Aliquam id ante id justo commodo porta. In non arcu sit amet arcu rhoncus scelerisque. Mauris viverra bibendum turpis, vel convallis sem lacinia eu. Curabitur sed nulla eu lacus vulputate lobortis. Donec aliquam feugiat vehicula.',
  },
  {
    id: '2',
    title: '2023 IPO Analysis',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget odio in risus efficitur faucibus. Aliquam id ante id justo commodo porta. In non arcu sit amet arcu rhoncus scelerisque. Mauris viverra bibendum turpis, vel convallis sem lacinia eu. Curabitur sed nulla eu lacus vulputate lobortis. Donec aliquam feugiat vehicula.',
  },
  {
    id: '3',
    title: 'Future of IPOs',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget odio in risus efficitur faucibus. Aliquam id ante id justo commodo porta. In non arcu sit amet arcu rhoncus scelerisque. Mauris viverra bibendum turpis, vel convallis sem lacinia eu. Curabitur sed nulla eu lacus vulputate lobortis. Donec aliquam feugiat vehicula.',
  },
]

// HOME PAGE PRODUCTS
export const ProductsData: ProductDataType[] = [
  {
    title: 'Nexus',
    link: '/',
  },
  {
    title: 'Gamma',
    link: '/',
  },
  {
    title: 'Insiduous',
    link: '/',
  },
]

// BLOG PAGE ARTCLES
export const articlesData: ArticleDataType[] = [
  {
    blogId: 'blogipocircle0001',
    data: {
      title: 'lorem ipsum content title',
      image:
        'http://res.cloudinary.com/deo80u7qs/image/upload/v1689118900/bhubtfam9ddapx8w6tfi.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi.',
      markdown:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi. Phasellus viverra et ligula eu scelerisque. Ut interdum euismod lacus nec dignissim. Vivamus iaculis rhoncus dui, sit amet fringilla neque consequat non. Proin id metus sapien. Ut id leo malesuada, facilisis tellus eu, accumsan sem. Donec facilisis vitae lacus vitae ullamcorper. Aliquam semper nunc ex, eget faucibus augue elementum non. Aenean fermentum enim sed malesuada ultricies. Nunc pulvinar nisi eget pulvinar pellentesque. In fermentum interdum nunc. Aliquam erat volutpat. Donec at laoreet elit. Morbi quis elit nibh. Quisque mollis eget elit vitae placerat. Phasellus pellentesque nisi odio, eget pharetra tortor scelerisque at. Fusce nunc diam, bibendum efficitur tempus vitae, tempus gravida orci. Ut nisi lacus, cursus non neque eget, faucibus elementum tortor.In nec maximus leo. Maecenas molestie orci vel pellentesque accumsan. Quisque eget porttitor nulla. Vivamus eget interdum mauris, vel ultricies dui. Cras finibus at sem sed imperdiet. Quisque tempus condimentum arcu et blandit. Suspendisse dolor metus, cursus id aliquam vel, pretium ut mauris. Donec accumsan eros felis, et elementum lacus venenatis ac. Duis volutpat tellus odio, quis pellentesque ipsum suscipit quis. Morbi non eleifend erat. Aliquam justo arcu, bibendum laoreet libero a, venenatis porttitor risus. Praesent scelerisque nec quam in blandit. Nam iaculis sagittis lorem. Quisque sed lorem sit amet odio tristique posuere eu quis nibh. In sit amet libero at enim malesuada malesuada ac fermentum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in ante enim. Morbi dictum turpis et orci convallis vulputate. Praesent eget egestas nisi. Donec pellentesque dolor a interdum suscipit. Nulla fringilla quam tortor, laoreet faucibus odio efficitur id.',
      createdAt: '16 Aug 2023',
      topic: ['IPO', 'TATA'],
      readingTime: 10,
      reactions: {
        likes: 10,
        comments: [
          {
            comment: 'I have added my knowledge and analysis',
            likes: 5,
            replies: ['fuck you', "you don't know shit about market"],
          },
        ],
      },
      author: {
        name: 'Piyush Jaiswal',
        designation: 'COO, IPOCircle | Software Developer',
        dp: 'http://res.cloudinary.com/deo80u7qs/image/upload/v1692152111/s6z3ezb235rz5lg9zqbc.png',
      },
    },
  },
  {
    blogId: 'blogipocircle0002',
    data: {
      title: 'lorem ipsum content title',
      image:
        'http://res.cloudinary.com/deo80u7qs/image/upload/v1689118900/bhubtfam9ddapx8w6tfi.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi.',
      markdown:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi. Phasellus viverra et ligula eu scelerisque. Ut interdum euismod lacus nec dignissim. Vivamus iaculis rhoncus dui, sit amet fringilla neque consequat non. Proin id metus sapien. Ut id leo malesuada, facilisis tellus eu, accumsan sem. Donec facilisis vitae lacus vitae ullamcorper. Aliquam semper nunc ex, eget faucibus augue elementum non. Aenean fermentum enim sed malesuada ultricies. Nunc pulvinar nisi eget pulvinar pellentesque. In fermentum interdum nunc. Aliquam erat volutpat. Donec at laoreet elit. Morbi quis elit nibh. Quisque mollis eget elit vitae placerat. Phasellus pellentesque nisi odio, eget pharetra tortor scelerisque at. Fusce nunc diam, bibendum efficitur tempus vitae, tempus gravida orci. Ut nisi lacus, cursus non neque eget, faucibus elementum tortor.In nec maximus leo. Maecenas molestie orci vel pellentesque accumsan. Quisque eget porttitor nulla. Vivamus eget interdum mauris, vel ultricies dui. Cras finibus at sem sed imperdiet. Quisque tempus condimentum arcu et blandit. Suspendisse dolor metus, cursus id aliquam vel, pretium ut mauris. Donec accumsan eros felis, et elementum lacus venenatis ac. Duis volutpat tellus odio, quis pellentesque ipsum suscipit quis. Morbi non eleifend erat. Aliquam justo arcu, bibendum laoreet libero a, venenatis porttitor risus. Praesent scelerisque nec quam in blandit. Nam iaculis sagittis lorem. Quisque sed lorem sit amet odio tristique posuere eu quis nibh. In sit amet libero at enim malesuada malesuada ac fermentum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in ante enim. Morbi dictum turpis et orci convallis vulputate. Praesent eget egestas nisi. Donec pellentesque dolor a interdum suscipit. Nulla fringilla quam tortor, laoreet faucibus odio efficitur id.',
      createdAt: '',
      topic: ['IPO'],
      readingTime: 4,
      reactions: {
        likes: 10,
        comments: [
          {
            comment: 'I have added my knowledge and analysis',
            likes: 5,
            replies: ['fuck you', "you don't know shit about market"],
          },
        ],
      },
      author: {
        name: 'Ujjwal Roy',
        designation: 'CEO',
        dp: 'http://res.cloudinary.com/deo80u7qs/image/upload/v1692152111/s6z3ezb235rz5lg9zqbc.png',
      },
    },
  },
  {
    blogId: 'blogipocircle0003',
    data: {
      title: 'lorem ipsum content title',
      image:
        'http://res.cloudinary.com/deo80u7qs/image/upload/v1689118900/bhubtfam9ddapx8w6tfi.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi.',
      markdown:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus sem, at sollicitudin ipsum pretium et. Maecenas lacinia nunc a mauris pretium, ornare hendrerit eros fermentum. Nunc tincidunt elementum mi, lobortis maximus ipsum sagittis ac. Sed laoreet, erat id volutpat pharetra, tortor dolor semper urna, at ultrices est erat id nisi. Suspendisse vitae tristique justo. Maecenas aliquam lorem ac fringilla vulputate. Mauris nec dui in augue pellentesque imperdiet non a lacus. Nulla porttitor in magna sed consequat. Fusce nec ligula feugiat, pretium lacus sit amet, porttitor augue. Duis vitae ante finibus, vulputate ex quis, tincidunt odio. Etiam et velit in lacus pharetra dignissim. Nam pulvinar felis velit, ac eleifend ligula porttitor eu. Sed sed mollis augue, quis tincidunt diam. Nulla facilisi. Phasellus viverra et ligula eu scelerisque. Ut interdum euismod lacus nec dignissim. Vivamus iaculis rhoncus dui, sit amet fringilla neque consequat non. Proin id metus sapien. Ut id leo malesuada, facilisis tellus eu, accumsan sem. Donec facilisis vitae lacus vitae ullamcorper. Aliquam semper nunc ex, eget faucibus augue elementum non. Aenean fermentum enim sed malesuada ultricies. Nunc pulvinar nisi eget pulvinar pellentesque. In fermentum interdum nunc. Aliquam erat volutpat. Donec at laoreet elit. Morbi quis elit nibh. Quisque mollis eget elit vitae placerat. Phasellus pellentesque nisi odio, eget pharetra tortor scelerisque at. Fusce nunc diam, bibendum efficitur tempus vitae, tempus gravida orci. Ut nisi lacus, cursus non neque eget, faucibus elementum tortor.In nec maximus leo. Maecenas molestie orci vel pellentesque accumsan. Quisque eget porttitor nulla. Vivamus eget interdum mauris, vel ultricies dui. Cras finibus at sem sed imperdiet. Quisque tempus condimentum arcu et blandit. Suspendisse dolor metus, cursus id aliquam vel, pretium ut mauris. Donec accumsan eros felis, et elementum lacus venenatis ac. Duis volutpat tellus odio, quis pellentesque ipsum suscipit quis. Morbi non eleifend erat. Aliquam justo arcu, bibendum laoreet libero a, venenatis porttitor risus. Praesent scelerisque nec quam in blandit. Nam iaculis sagittis lorem. Quisque sed lorem sit amet odio tristique posuere eu quis nibh. In sit amet libero at enim malesuada malesuada ac fermentum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in ante enim. Morbi dictum turpis et orci convallis vulputate. Praesent eget egestas nisi. Donec pellentesque dolor a interdum suscipit. Nulla fringilla quam tortor, laoreet faucibus odio efficitur id.',
      createdAt: '',
      topic: ['IPO'],
      readingTime: 5,
      reactions: {
        likes: 10,
        comments: [
          {
            comment: 'I have added my knowledge and analysis',
            likes: 5,
            replies: ['fuck you', "you don't know shit about market"],
          },
        ],
      },
      author: {
        name: 'Ujjwal Roy',
        designation: 'CEO',
        dp: 'http://res.cloudinary.com/deo80u7qs/image/upload/v1692152111/s6z3ezb235rz5lg9zqbc.png',
      },
    },
  },
]

// IPO TRACKER DUMMY DATA
export const trackerData: TrackerDataType[] = [
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
  {
    company: 'IPOCIRCLE',
    listing: 5000,
    current: 4000,
    dayend: 3000,
    issue: 2000,
    sector: 'Pharma',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 4000,
    dayend: 9000,
    issue: 2000,
    sector: 'Fintech',
  },
  {
    company: 'IPOCIRCLE',
    listing: 1000,
    current: 10000,
    dayend: 9000,
    issue: 5000,
    sector: 'Hospitality',
  },
]
