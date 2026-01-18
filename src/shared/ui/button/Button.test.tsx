import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders button with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByText('Primary')).toBeInTheDocument()

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByText('Outline')).toBeInTheDocument()

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByText('Ghost')).toBeInTheDocument()
  })

  it('renders disabled button', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByText('Disabled')
    expect(button).toBeDisabled()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )

    const button = screen.getByText('Disabled')
    await user.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with leftSection', () => {
    render(<Button leftSection={<span>🔍</span>}>Search</Button>)
    expect(screen.getByText('🔍')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
