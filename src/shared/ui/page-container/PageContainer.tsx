import type { ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

function PageContainer({ children, className }: PageContainerProps) {
  return <section className={cn('mx-auto w-full max-w-[400px]', className)}>{children}</section>
}

export { PageContainer }
