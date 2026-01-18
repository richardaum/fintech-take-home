import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders search input', () => {
    render(<SearchInput placeholder="Search..." />)
    const input = screen.getByPlaceholderText('Search...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('name', 'search')
  })

  it('renders with left section', () => {
    render(<SearchInput leftSection={<span>🔍</span>} />)
    expect(screen.getByText('🔍')).toBeInTheDocument()
  })

  it('allows typing in input', async () => {
    const user = userEvent.setup()
    render(<SearchInput placeholder="Search..." />)
    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement

    await user.type(input, 'test query')
    expect(input.value).toBe('test query')
  })

  it('handles input changes', async () => {
    const user = userEvent.setup()
    render(<SearchInput placeholder="Search..." />)
    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement

    await user.clear(input)
    await user.type(input, 'new search')
    expect(input.value).toBe('new search')
  })
})
