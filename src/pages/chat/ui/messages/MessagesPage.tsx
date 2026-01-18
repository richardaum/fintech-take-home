import { useEffect } from 'react'

import { useAnimationStore } from '@/shared/lib/animations'
import { PageContainer, PageContent } from '@/shared/ui'

import { Content } from './Content'
import { Header } from './Header'
import { MessageInput } from './MessageInput'
import { useScrollToRef } from './useScrollToRef'

function MessagesPage() {
  const setShowBottomNav = useAnimationStore((state) => state.setShowBottomNav)
  const { bottomRef } = useScrollToRef()

  useEffect(() => {
    setShowBottomNav(false)
  }, [setShowBottomNav])

  return (
    <PageContainer className="flex flex-1 flex-col">
      <Header />
      <PageContent className="flex flex-1 flex-col">
        <Content />
        <div ref={bottomRef} />
      </PageContent>
      <MessageInput />
    </PageContainer>
  )
}

export { MessagesPage }
