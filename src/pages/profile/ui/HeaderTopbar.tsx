import { motion } from 'framer-motion'

import { AngleLeftIcon } from '@/shared/icons'
import { animationManager } from '@/shared/lib'
import { useAnimationStore } from '@/shared/lib/useAnimationStore'

import { AnimationName, profileAnimationDelays } from './animations'

function HeaderTopbar() {
  const addCompletedAnimation = useAnimationStore(
    (state) => state.addCompletedAnimation
  )

  return (
    <motion.header
      {...animationManager.getAnimationProps({
        type: 'slideDown',
        delay: profileAnimationDelays.header,
      })}
      className="relative flex h-[42px] w-full items-center justify-center"
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.HeaderTopbar)
      }}
    >
      <AngleLeftIcon className="absolute left-2 size-6" />
      <h1 className="text-headline-small font-medium">My Profile</h1>
    </motion.header>
  )
}

export { HeaderTopbar }
