import { headers } from 'next/headers'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const _headers = headers()
  const currentUrl = _headers.get('x-url')
  return <div>{children}</div>
}
