import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './page'

test('Home page renders B2B and B2C panels', () => {
  render(<Home />)
  
  // Check B2B panel
  expect(screen.getByText(/Espace Professionnel/i)).toBeDefined()
  expect(screen.getByText(/Rigoureux par Nature/i)).toBeDefined()
  
  // Check B2C panel
  expect(screen.getByText(/Boutique Privée/i)).toBeDefined()
  expect(screen.getByText(/Le plus pur trésor de la lagune/i)).toBeDefined()
})
