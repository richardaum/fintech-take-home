export const AnimationName = {
  HeaderTopbar: 'ChatHeaderTopbar',
  ChatIcon: 'ChatIcon',
  Title: 'ChatTitle',
  Description: 'ChatDescription',
  Buttons: 'ChatButtons',
} as const

export type AnimationNameType = (typeof AnimationName)[keyof typeof AnimationName]

export const chatAnimationDelays = {
  header: 0,
  chatIcon: 0.1,
  title: 0.2,
  description: 0.3,
  buttons: 0.4,
} as const
