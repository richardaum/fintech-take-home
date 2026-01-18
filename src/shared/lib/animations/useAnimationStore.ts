import { create } from 'zustand'

type AnimationStore = {
  clearAll: () => void
  expectedAnimations: string[]
  setExpectedAnimations: (animations: string[]) => void
  completedAnimations: string[]
  addCompletedAnimation: (animation: string) => void
  showBottomNav: boolean
  setShowBottomNav: (show: boolean) => void
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  clearAll: () => set({ expectedAnimations: [], completedAnimations: [] }),
  expectedAnimations: [],
  setExpectedAnimations: (animations: string[]) =>
    set({ expectedAnimations: animations }),
  completedAnimations: [],
  addCompletedAnimation: (animation: string) =>
    set((state) => ({
      completedAnimations: [...state.completedAnimations, animation],
    })),
  showBottomNav: false,
  setShowBottomNav: (show: boolean) => set({ showBottomNav: show }),
}))
