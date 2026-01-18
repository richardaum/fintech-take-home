import { BottomNav } from '@/shared/ui'

import { Content } from './Content'
import { Header } from './header'

function HomePage() {
  return (
    <>
      <Header />
      <Content className="mt-[44px]" />
      <BottomNav />
    </>
  )
}

export { HomePage }
