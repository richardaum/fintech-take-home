import { PageHeader } from '@/shared/ui'

import { AnimationName, messagesAnimationDelays } from './animations'

function Header() {
  return (
    <PageHeader title="Messages" animationName={AnimationName.HeaderTopbar} delay={messagesAnimationDelays.header} />
  )
}

export { Header }
