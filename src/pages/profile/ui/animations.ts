export const AnimationName = {
  HeaderTopbar: 'ProfileHeaderTopbar',
  UserCard: 'ProfileUserCard',
} as const

export type AnimationNameType =
  (typeof AnimationName)[keyof typeof AnimationName]

export const profileAnimationDelays = {
  header: 0,
  userCard: 0.2,
} as const
