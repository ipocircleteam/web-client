import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Menu from './menu'
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.document = window.document;

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

  test('renders large menu for screen width greater than 600', () => {
    Object.defineProperty(window, 'innerwidth', { value: 300, writable: true })
    render(<Menu />)
    const largeMenu = screen.getByTestId('large-menu')
    expect(largeMenu).toBeInTheDocument
  })

  // test('renders small menu for screen width less than 600', () => {
  //   Object.defineProperty(window, 'innerwidth', { value: 500, writable: true })
  //   render(<Menu />)
  //   const smallMenu = screen.getByTestId("small-menu")
  //   expect(smallMenu).toBeInTheDocument
  // })
})
