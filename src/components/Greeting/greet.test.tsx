import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Greet } from './greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const headingElement = screen.getByText('HI there from team QuickIPO')
    
    expect(headingElement).toBeInTheDocument()
  })
})
