import { type Transaction, useWalletQuery } from '@/entities/wallet'
import { AngleRightSmallIcon } from '@/shared/icons'
import { cn, formatCurrency } from '@/shared/lib'
import { CircleIcon, Divider } from '@/shared/ui'

import { TYPE_MAPPING } from './typeMapping'

function TransactionList({ className }: { className?: string }) {
  const { data } = useWalletQuery()

  return (
    <section className={cn('space-y-2', className)}>
      <header className="flex items-center justify-between">
        <h2 className="text-headline-small font-medium">Transactions</h2>
        <AngleRightSmallIcon className="size-6" />
      </header>

      <ul className="rounded-xl bg-gray-900 p-4">
        {data?.transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            transaction={transaction}
            currency={data?.currency}
          />
        ))}
      </ul>
    </section>
  )
}

function ListItem({
  transaction,
  currency,
}: {
  transaction: Transaction
  currency: string
}) {
  const { icon: Icon, style, label } = TYPE_MAPPING[transaction.type]

  return (
    <>
      <li className="flex items-center">
        <div className="flex items-center gap-2">
          <CircleIcon icon={Icon} size={40} iconSize={24} className={style} />
          <span className="text-label-medium">{label}</span>
        </div>

        <div
          className={cn(
            'ml-auto',
            transaction.amount < 0 ? 'text-bg-error' : 'text-content-success',
            transaction.type === 'SAVINGS' && 'text-content-warning'
          )}
        >
          {formatCurrency(transaction.amount, currency)}
        </div>

        <span className="ml-2 shrink-0">
          <AngleRightSmallIcon className="size-6" />
        </span>
      </li>
      <Divider orientation="horizontal" className="my-4 last:hidden" />
    </>
  )
}

export { TransactionList }
