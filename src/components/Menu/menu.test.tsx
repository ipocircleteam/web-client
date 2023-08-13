import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Menu from './menu'

describe('Renders Menu Bar correctly', () => {
  test('renders logo correctly', () => {
    render(<Menu />)
    const logoEl = screen.getByRole('img')
    expect(logoEl).toBeInTheDocument()
  })

  test('renders menu links correctly', () => {
    render(<Menu />)
    const gmp = screen.getByRole('link', {
      name: 'GMP',
    })
    const ipos = screen.getByRole('link', {
      name: 'IPOs',
    })
    const ipotracker = screen.getByRole('link', {
      name: 'Analyse',
    })
    const consultingButton = screen.getByRole('button', {
      name: 'Free Consulting',
    })
    expect(gmp).toBeInTheDocument()
    expect(ipos).toBeInTheDocument()
    expect(ipotracker).toBeInTheDocument()
    expect(consultingButton).toBeInTheDocument()
  })
})
