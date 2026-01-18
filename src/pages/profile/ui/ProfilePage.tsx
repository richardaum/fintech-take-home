import { useBottomNavVisibility } from '@/shared/ui'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

const EXPECTED_ANIMATIONS = [AnimationName.HeaderTopbar]

function ProfilePage() {
  useBottomNavVisibility({ expectedAnimations: EXPECTED_ANIMATIONS })

  return (
    <section className="mx-auto w-full max-w-[400px]">
      <Header />
      <Content />
    </section>
  )
}

export { ProfilePage }
