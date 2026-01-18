import { motion } from 'framer-motion'

import { animationManager, cn } from '@/shared/lib'
import { useAnimationStore } from '@/shared/lib/useAnimationStore'

import { AnimationName, homeAnimationDelays } from './animations'
import { TransactionList } from './transaction-list/TransactionList'

function Content({ className }: { className?: string }) {
  const addCompletedAnimation = useAnimationStore(
    (state) => state.addCompletedAnimation
  )

  return (
    <motion.main
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: homeAnimationDelays.content,
      })}
      className={cn('mx-auto w-full max-w-[400px] px-4 pt-6', className)}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.Content)
      }}
    >
      <TransactionList />
    </motion.main>
  )
}

export { Content }
