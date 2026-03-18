import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './page'

test('Home page renders B2B and B2C panels', () => {
  render(<Home />)
  
  // Check B2B panel
  expect(screen.getByText(/Accès Pro/i)).toBeDefined()
  expect(screen.getByText(/Professionnels/i)).toBeDefined()
  
  // Check B2C panel
  expect(screen.getByText(/Boutique/i)).toBeDefined()
  expect(screen.getByText(/Particuliers/i)).toBeDefined()
})
