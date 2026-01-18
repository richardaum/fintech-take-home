import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { PageHeader } from './PageHeader'

vi.mock('@/shared/icons', () => ({
  AngleLeftIcon: () => <div>Back</div>,
}))

vi.mock('@/shared/lib/animations', () => ({
  animationManager: {
    getAnimationProps: () => ({}),
  },
  useAnimationStore: () => ({
    addCompletedAnimation: vi.fn(),
  }),
}))

describe('PageHeader', () => {
  beforeEach(() => {
    window.history.back = vi.fn()
  })

  it('renders page header with title', () => {
    render(<PageHeader title="Test Page" animationName="test" />)
    expect(screen.getByText('Test Page')).toBeInTheDocument()
  })

  it('renders back button', () => {
    render(<PageHeader title="Test Page" animationName="test" />)
    const backButton = screen.getByLabelText('Go back')
    expect(backButton).toBeInTheDocument()
  })

  it('calls window.history.back when back button is clicked', async () => {
    const user = userEvent.setup()
    render(<PageHeader title="Test Page" animationName="test" />)

    const backButton = screen.getByLabelText('Go back')
    await user.click(backButton)

    expect(window.history.back).toHaveBeenCalledTimes(1)
  })
})
