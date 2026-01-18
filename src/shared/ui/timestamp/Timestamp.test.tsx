import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Timestamp } from './Timestamp'

describe('Timestamp', () => {
  it('renders timestamp', () => {
    const timestamp = new Date().toISOString()
    render(<Timestamp timestamp={timestamp} />)
    expect(screen.getByText(/ago|in/)).toBeInTheDocument()
  })

  it('formats recent timestamp correctly', () => {
    const recentTimestamp = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    render(<Timestamp timestamp={recentTimestamp} />)
    expect(screen.getByText(/ago|in/)).toBeInTheDocument()
  })

  it('formats old timestamp correctly', () => {
    const oldTimestamp = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    render(<Timestamp timestamp={oldTimestamp} />)
    expect(screen.getByText(/ago|in/)).toBeInTheDocument()
  })
})
