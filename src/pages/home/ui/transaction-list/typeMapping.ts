import type { TransactionType } from '@/entities/wallet'
import * as Icons from '@/shared/icons'
import { cn } from '@/shared/lib'

export const TYPE_MAPPING: Record<
  TransactionType,
  {
    label: string
    icon: React.ComponentType<{ className?: string }>
    style: string
  }
> = {
  SPENDING: {
    label: 'Spending',
    icon: Icons.CreditCardMinusIcon,
    style: cn('bg-bg-accent-light text-blue-300'),
  },
  INCOME: {
    label: 'Income',
    icon: Icons.CoinsIcon,
    style: cn('bg-bg-success-light text-bg-success'),
  },
  BILLS: {
    label: 'Bills',
    icon: Icons.InvoiceIcon,
    style: cn('bg-bg-warning-light text-yellow-900'),
  },
  SAVINGS: {
    label: 'Savings',
    icon: Icons.SackDollarIcon,
    style: cn('bg-bg-warning-light text-orange-600'),
  },
}
