import { PageContent, useBottomNavVisibility } from '@/shared/ui'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

const EXPECTED_ANIMATIONS = [
  AnimationName.HeaderTopbar,
  AnimationName.HeaderWallet,
  AnimationName.HeaderActions,
  AnimationName.Content,
]

function HomePage() {
  useBottomNavVisibility({ expectedAnimations: EXPECTED_ANIMATIONS })

  return (
    <>
      <Header />
      <PageContent>
        <Content className="mt-[44px]" />
      </PageContent>
    </>
  )
}

export { HomePage }
