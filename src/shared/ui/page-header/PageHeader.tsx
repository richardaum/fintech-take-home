import { motion } from 'framer-motion'

import { AngleLeftIcon } from '@/shared/icons'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'

type PageHeaderProps = {
  title: string
  animationName: string
  delay?: number
}

function PageHeader({ title, animationName, delay = 0 }: PageHeaderProps) {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.header
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay,
      })}
      className="bg-bg sticky top-0 z-40 flex h-[42px] w-full items-center justify-center"
      onAnimationComplete={() => {
        addCompletedAnimation(animationName)
      }}
    >
      <AngleLeftIcon className="absolute left-2 size-6" />
      <h1 className="text-headline-small font-medium">{title}</h1>
    </motion.header>
  )
}

export { PageHeader }
