import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CircleIcon } from './CircleIcon'

const TestIcon = ({ className }: { className?: string }) => <div className={className}>Icon</div>

describe('CircleIcon', () => {
  it('renders circle icon', () => {
    render(<CircleIcon icon={TestIcon} />)
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })
})
