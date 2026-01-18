import { PageHeader } from '@/shared/ui'

import { AnimationName, profileAnimationDelays } from './animations'

function HeaderTopbar() {
  return (
    <PageHeader title="My Profile" animationName={AnimationName.HeaderTopbar} delay={profileAnimationDelays.header} />
  )
}

export { HeaderTopbar }
