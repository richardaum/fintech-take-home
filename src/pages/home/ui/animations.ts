export const AnimationName = {
  HeaderTopbar: 'HeaderTopbar',
  HeaderWallet: 'HeaderWallet',
  HeaderActions: 'HeaderActions',
  Content: 'Content',
} as const

export type AnimationNameType = (typeof AnimationName)[keyof typeof AnimationName]

export const homeAnimationDelays = {
  header: 0,
  content: 0.5,
} as const
