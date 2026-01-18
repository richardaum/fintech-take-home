import { create } from 'zustand'

type AnimationStore = {
  completedAnimations: string[]
  addCompletedAnimation: (animation: string) => void
  clearCompletedAnimations: () => void
  showBottomNav: boolean
  setShowBottomNav: (show: boolean) => void
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  completedAnimations: [],
  addCompletedAnimation: (animation: string) =>
    set((state) => ({
      completedAnimations: [...state.completedAnimations, animation],
    })),
  clearCompletedAnimations: () => set({ completedAnimations: [] }),
  showBottomNav: false,
  setShowBottomNav: (show: boolean) => set({ showBottomNav: show }),
}))
