import { PageContainer, PageContent } from '@/shared/ui'
import { useBottomNavVisibility } from '@/shared/ui/bottom-nav'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

const EXPECTED_ANIMATIONS = [AnimationName.HeaderTopbar]

function MessagesPage() {
  useBottomNavVisibility({ expectedAnimations: EXPECTED_ANIMATIONS })
  return (
    <PageContainer>
      <Header />
      <PageContent>
        <Content />
      </PageContent>
    </PageContainer>
  )
}

export { MessagesPage }
