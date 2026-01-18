import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageContent } from './PageContent'

describe('PageContent', () => {
  it('renders children', () => {
    render(
      <PageContent>
        <div>Test content</div>
      </PageContent>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
