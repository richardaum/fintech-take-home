import { cn } from '@/shared/lib'
import { useBottomNavVisibility } from '@/shared/ui'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

// Considers BottomNav height when setting the content padding bottom
const bottomNavPadding = cn('pb-[calc(64px+34px)]')

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
      <Content className={cn('mt-[44px]', bottomNavPadding)} />
    </>
  )
}

export { HomePage }
