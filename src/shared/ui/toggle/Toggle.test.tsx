import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('renders toggle', () => {
    render(<Toggle />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('renders checked toggle', () => {
    render(<Toggle checked />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('data-state', 'checked')
  })

  it('calls onCheckedChange when clicked', async () => {
    const handleChange = vi.fn()
    render(<Toggle onCheckedChange={handleChange} />)
    const toggle = screen.getByRole('switch')

    await userEvent.click(toggle)
    expect(handleChange).toHaveBeenCalled()
  })
})
