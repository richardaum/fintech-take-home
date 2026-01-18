import { homePageConfig } from '@/pages/home/config'

export const animationConfig = {
  duration: 0.5,
  ease: 'easeOut' as const,
  delay: 0,
} as const

const noAnimation = {
  initial: {},
  animate: {},
  transition: { duration: 0 },
} as const

const topbarAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: animationConfig,
} as const

const walletAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: animationConfig,
} as const

const actionsAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: animationConfig,
} as const

export const headerAnimations = {
  topbar: homePageConfig.animations.enabled ? topbarAnimation : noAnimation,
  wallet: homePageConfig.animations.enabled ? walletAnimation : noAnimation,
  actions: homePageConfig.animations.enabled ? actionsAnimation : noAnimation,
} as const
