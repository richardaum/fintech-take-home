import { cn } from '@/shared/lib/cn'
import { useBottomNavVisibility } from '@/shared/ui'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

const EXPECTED_ANIMATIONS = [AnimationName.HeaderTopbar]

// Considers BottomNav height when setting the content padding bottom
const bottomNavPadding = cn('pb-[calc(64px+34px)]')

function ProfilePage() {
  useBottomNavVisibility({ expectedAnimations: EXPECTED_ANIMATIONS })

  return (
    <section className="mx-auto w-full max-w-[400px] px-4">
      <Header />
      <Content className={bottomNavPadding} />
    </section>
  )
}

export { ProfilePage }
