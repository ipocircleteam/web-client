import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from './hero'

describe('home page hero renders correctly', () => {
  test('heading renders correctly', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  test('button renders correctly', () => {
    render(<Hero />)
    const buttonEl = screen.getByRole('button', {
      name: 'Get Free Consulting',
    })
    expect(buttonEl).toBeInTheDocument()
  })
})
