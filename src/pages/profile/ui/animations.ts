export const AnimationName = {
  HeaderTopbar: 'ProfileHeaderTopbar',
  UserCard: 'ProfileUserCard',
  SettingsList: 'ProfileSettingsList',
} as const

export type AnimationNameType = (typeof AnimationName)[keyof typeof AnimationName]

export const profileAnimationDelays = {
  header: 0,
  userCard: 0.2,
  settingsList: 0.4,
} as const
