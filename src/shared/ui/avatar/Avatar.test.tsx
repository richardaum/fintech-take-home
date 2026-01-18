import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders avatar with image', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />)
    const img = screen.getByAltText('User avatar')
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toBe('https://example.com/avatar.jpg')
  })

  it('renders image with custom size', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" size={64} />)
    const img = screen.getByAltText('User avatar')
    expect(img).toBeInTheDocument()
  })
})
