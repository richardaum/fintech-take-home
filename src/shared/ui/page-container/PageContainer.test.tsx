import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageContainer } from './PageContainer'

describe('PageContainer', () => {
  it('renders children', () => {
    render(
      <PageContainer>
        <div>Test content</div>
      </PageContainer>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
