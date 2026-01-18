import { useBottomNavVisibility } from '@/shared/ui/bottom-nav'

import { AnimationName } from './animations'
import { Content } from './Content'
import { Header } from './Header'

const EXPECTED_ANIMATIONS = [
  AnimationName.HeaderTopbar,
  AnimationName.ChatIcon,
  AnimationName.Title,
  AnimationName.Description,
  AnimationName.Buttons,
]

function ChatPage() {
  useBottomNavVisibility({ expectedAnimations: EXPECTED_ANIMATIONS })
  return (
    <section className="mx-auto w-full max-w-[400px]">
      <Header />
      <Content />
    </section>
  )
}

export { ChatPage }
