import { motion } from 'framer-motion'
import { useState } from 'react'

import { useWalletQuery } from '@/entities/wallet'
import { WalletIcon } from '@/shared/icons'
import { animationManager, cn, formatCurrency } from '@/shared/lib'
import { useAnimationStore } from '@/shared/lib/useAnimationStore'
import { Button, CurrencySelect } from '@/shared/ui'

import { AnimationName, homeAnimationDelays } from '../animations'

function HeaderWallet({ className }: { className?: string }) {
  const { data } = useWalletQuery()
  const addCompletedAnimation = useAnimationStore(
    (state) => state.addCompletedAnimation
  )
  const [currency, setCurrency] = useState<string | undefined>(data?.currency)

  return (
    <motion.div
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: homeAnimationDelays.header,
      })}
      className={cn('flex flex-col items-center', className)}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.HeaderWallet)
      }}
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
