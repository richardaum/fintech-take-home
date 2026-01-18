import { cn } from '@/shared/lib'

import { TransactionList } from './transaction-list'

function Content({ className }: { className?: string }) {
  return (
    <main className={cn('px-4 pt-6', className)}>
      <TransactionList />
    </main>
  )
}

export { Content }
