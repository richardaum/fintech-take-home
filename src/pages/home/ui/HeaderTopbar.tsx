import { motion } from 'framer-motion'

import { BellIcon, SearchIcon, TrophyStarIcon } from '@/shared/icons'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'
import { cn } from '@/shared/lib/cn'
import { Button, SearchInput } from '@/shared/ui'

import { AnimationName, homeAnimationDelays } from './animations'

function HeaderTopbar({ className }: { className?: string }) {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.div
      {...animationManager.getAnimationProps({
        type: 'slideDown',
        delay: homeAnimationDelays.header,
      })}
      className={cn('flex w-full items-center justify-between gap-8', className)}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.HeaderTopbar)
      }}
    >
      <Button variant="ghost" size="thin">
        <TrophyStarIcon className="size-6" />
      </Button>

      <SearchInput colorVariant="blue" leftSection={<SearchIcon />} placeholder={`Search "Payments"`} />

      <Button variant="ghost" size="thin">
        <BellIcon className="size-6" />
      </Button>
    </motion.div>
  )
}

export { HeaderTopbar }
