import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/shared/icons', async () => {
  const actual = await vi.importActual<typeof import('@/shared/icons')>('@/shared/icons')
  return {
    ...actual,
    AngleDownIcon: () => <div>Down</div>,
    CheckIcon: () => <div>Check</div>,
  }
})

import { CurrencySelect } from './CurrencySelect'

describe('CurrencySelect', () => {
  it('renders currency select', () => {
    render(<CurrencySelect />)
    expect(screen.getByText('Select currency')).toBeInTheDocument()
  })

  it('renders with default value', () => {
    render(<CurrencySelect defaultValue="USD" />)
    expect(screen.getByText('Select currency')).toBeInTheDocument()
  })

  it('renders with controlled value', () => {
    render(<CurrencySelect value="USD" />)
    expect(screen.getByText('Select currency')).toBeInTheDocument()
  })
})
