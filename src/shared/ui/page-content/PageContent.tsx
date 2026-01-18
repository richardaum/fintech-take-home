import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

type PageContentProps = {
  children: ReactNode
  className?: string
}

function PageContent({ children, className }: PageContentProps) {
  return <section className={cn('px-4', className)}>{children}</section>
}

export { PageContent }
