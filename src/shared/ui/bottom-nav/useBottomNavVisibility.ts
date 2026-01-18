import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useAnimationStore } from '@/shared/lib/useAnimationStore'

/**
 * Controls the visibility of the bottom navigation bar.
 * Shows the bottom nav only after all expected animations have completed.
 *
 * @remarks This hook should be used at the page level component.
 *
 * @param expectedAnimations - Array of animation IDs that must complete before showing the bottom nav
 */
function useBottomNavVisibility({
  expectedAnimations,
}: {
  expectedAnimations: string[]
}) {
  const { setShowBottomNav, completedAnimations, clearCompletedAnimations } =
    useAnimationStore(
      useShallow((state) => ({
        setShowBottomNav: state.setShowBottomNav,
        completedAnimations: state.completedAnimations,
        clearCompletedAnimations: state.clearCompletedAnimations,
      }))
    )

  useEffect(() => {
    if (
      expectedAnimations.every((animation) =>
        completedAnimations.includes(animation)
      )
    ) {
      setShowBottomNav(true)
    }
  }, [
    completedAnimations,
    setShowBottomNav,
    expectedAnimations,
    clearCompletedAnimations,
  ])

  useEffect(() => {
    return () => {
      clearCompletedAnimations()
    }
  }, [clearCompletedAnimations])
}

export { useBottomNavVisibility }
