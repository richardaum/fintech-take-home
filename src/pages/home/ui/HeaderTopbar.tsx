import { motion } from 'framer-motion'

import { BellIcon, SearchIcon, TrophyStarIcon } from '@/shared/icons'
import { animationManager, cn } from '@/shared/lib'
import { useAnimationStore } from '@/shared/lib/useAnimationStore'
import { SearchInput } from '@/shared/ui'

import { AnimationName, homeAnimationDelays } from './animations'

function HeaderTopbar({ className }: { className?: string }) {
  const addCompletedAnimation = useAnimationStore(
    (state) => state.addCompletedAnimation
  )

  return (
    <motion.div
      {...animationManager.getAnimationProps({
        type: 'slideDown',
        delay: homeAnimationDelays.header,
      })}
      className={cn(
        'flex w-full items-center justify-between gap-8',
        className
      )}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.HeaderTopbar)
      }}
    >
      <TrophyStarIcon className="size-6" />
      <SearchInput
        colorVariant="blue"
        leftSection={<SearchIcon />}
        placeholder={`Search "Payments"`}
      />
      <BellIcon className="size-6" />
    </motion.div>
  )
}

export { HeaderTopbar }
