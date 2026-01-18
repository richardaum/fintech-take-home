import { PageHeader } from '@/shared/ui'

import { AnimationName, chatAnimationDelays } from './animations'

function Header() {
  return <PageHeader title="Support" animationName={AnimationName.HeaderTopbar} delay={chatAnimationDelays.header} />
}

export { Header }
