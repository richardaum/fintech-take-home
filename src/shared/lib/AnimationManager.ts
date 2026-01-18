import type { TargetAndTransition, Transition } from 'framer-motion'

import { animationTransition } from './animations'

type AnimationType =
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'

type AnimationConfig = {
  type?: AnimationType
  delay?: number
  customInitial?: TargetAndTransition
  customAnimate?: TargetAndTransition
  customTransition?: Transition
}

class AnimationManager {
  private enabled: boolean

  constructor() {
    this.enabled = import.meta.env.VITE_SKIP_ANIMATIONS !== 'true'
  }

  isEnabled(): boolean {
    return this.enabled
  }

  getInitial(config?: AnimationConfig): TargetAndTransition {
    if (!this.enabled) {
      return {}
    }

    if (config?.customInitial) {
      return config.customInitial
    }

    const type = config?.type ?? 'fade'

    switch (type) {
      case 'fade':
        return { opacity: 0 }
      case 'slideUp':
        return { y: 100, opacity: 0 }
      case 'slideDown':
        return { y: -100, opacity: 0 }
      case 'slideLeft':
        return { x: 100, opacity: 0 }
      case 'slideRight':
        return { x: -100, opacity: 0 }
      default:
        return {}
    }
  }

  getAnimate(config?: AnimationConfig): TargetAndTransition {
    if (!this.enabled) {
      return {}
    }

    if (config?.customAnimate) {
      return config.customAnimate
    }

    const type = config?.type ?? 'fade'

    switch (type) {
      case 'fade':
        return { opacity: 1 }
      case 'slideUp':
      case 'slideDown':
        return { y: 0, opacity: 1 }
      case 'slideLeft':
      case 'slideRight':
        return { x: 0, opacity: 1 }
      default:
        return {}
    }
  }

  getTransition(config?: AnimationConfig): Transition {
    if (!this.enabled) {
      return { duration: 0 }
    }

    if (config?.customTransition) {
      return config.customTransition
    }

    return {
      ...animationTransition,
      ...(config?.delay !== undefined && { delay: config.delay }),
    }
  }

  getAnimationProps(config?: AnimationConfig) {
    return {
      initial: this.getInitial(config),
      animate: this.getAnimate(config),
      transition: this.getTransition(config),
    }
  }
}

export const animationManager = new AnimationManager()
