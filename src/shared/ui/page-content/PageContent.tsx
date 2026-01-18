import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

type PageContentProps = {
  children: ReactNode
  className?: string
}

// Considers BottomNav height when setting the content padding bottom
const bottomNavPadding = cn('pb-[calc(64px+34px)]')

function PageContent({ children, className }: PageContentProps) {
  return <section className={cn(bottomNavPadding, className)}>{children}</section>
}

export { PageContent }
