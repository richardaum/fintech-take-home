import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import { BottomNav } from './BottomNav'

vi.mock('@/shared/icons', async () => {
  const actual = await vi.importActual<typeof import('@/shared/icons')>('@/shared/icons')
  return {
    ...actual,
    ChartPieFilledIcon: () => <div>Chart</div>,
    ChartPieOutlinedIcon: () => <div>Chart</div>,
    ChatFilledIcon: () => <div>Chat</div>,
    ChatOutlinedIcon: () => <div>Chat</div>,
    HomeFilledIcon: () => <div>Home</div>,
    HomeOutlinedIcon: () => <div>Home</div>,
    ScannerFilledIcon: () => <div>Scanner</div>,
    ScannerOutlinedIcon: () => <div>Scanner</div>,
    UserFilledIcon: () => <div>User</div>,
    UserOutlinedIcon: () => <div>User</div>,
  }
})

vi.mock('@/shared/lib/animations', () => ({
  animationManager: {
    getAnimationProps: () => ({}),
  },
  useAnimationStore: () => ({
    showBottomNav: true,
    expectedAnimations: [],
  }),
}))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({ pathname: '/' }),
  }
})

describe('BottomNav', () => {
  it('renders bottom navigation when visible', () => {
    render(
      <BrowserRouter>
        <BottomNav />
      </BrowserRouter>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(
      <BrowserRouter>
        <BottomNav />
      </BrowserRouter>
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)

    const hrefs = links.map((link) => link.getAttribute('href'))
    expect(hrefs).toContain('/')
    expect(hrefs).toContain('/chart')
    expect(hrefs).toContain('/scanner')
    expect(hrefs).toContain('/chat')
    expect(hrefs).toContain('/profile')
  })
})
