import { useEffect } from 'react'
import { useShallow } from 'zustand/shallow'

import { useAnimationStore } from '@/shared/lib/animations'

/**
 * Controls the visibility of the bottom navigation bar.
 * Shows the bottom nav only after all expected animations have completed.
 * If no expected animations are provided, shows the bottom nav immediately (with animation).
 *
 * @remarks This hook should be used at the page level component.
 *
 * @param expectedAnimations - Array of animation IDs that must complete before showing the bottom nav.
 *                             If empty, the bottom nav will be shown immediately.
 */
function useBottomNavVisibility({ expectedAnimations }: { expectedAnimations: string[] }) {
  const { setShowBottomNav, completedAnimations, clearAll, setExpectedAnimations } = useAnimationStore(
    useShallow((state) => ({
      setShowBottomNav: state.setShowBottomNav,
      completedAnimations: state.completedAnimations,
      clearAll: state.clearAll,
      setExpectedAnimations: state.setExpectedAnimations,
    }))
  )

  // Show bottom nav when all expected animations have completed
  useEffect(() => {
    const showBottomNav = expectedAnimations.every((animation) => completedAnimations.includes(animation))

    if (showBottomNav) setShowBottomNav(true)
  }, [completedAnimations, setShowBottomNav, expectedAnimations])

  // Sync expected animations with the store
  useEffect(() => {
    setExpectedAnimations(expectedAnimations)
  }, [expectedAnimations, setExpectedAnimations])

  // Clear all animations when the component unmounts
  useEffect(() => {
    return () => {
      clearAll()
    }
  }, [clearAll])
}

export { useBottomNavVisibility }
