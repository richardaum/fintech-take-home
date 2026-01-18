import { motion } from 'framer-motion'
import { useState } from 'react'

import { useWalletQuery } from '@/entities/wallet'
import { WalletIcon } from '@/shared/icons'
import { cn, formatCurrency, headerAnimations } from '@/shared/lib'
import { Button, CurrencySelect } from '@/shared/ui'

function HeaderWallet({ className }: { className?: string }) {
  const { data } = useWalletQuery()

  const [currency, setCurrency] = useState<string | undefined>(data?.currency)

  return (
    <motion.div
      {...headerAnimations.wallet}
      className={cn('flex flex-col items-center', className)}
    >
      <CurrencySelect
        value={currency}
        onValueChange={(value) => {
          setCurrency(value)
        }}
      />

      <div className="text-title-xlarge font-semibold">
        {data && currency ? formatCurrency(data.amount, currency) : ''}
      </div>

      <span className="text-body-small text-content-tertiary mt-1">
        Available Balance
      </span>

      <Button className="mt-4" leftSection={<WalletIcon className="size-4" />}>
        Add Money
      </Button>
    </motion.div>
  )
}

export { HeaderWallet }
