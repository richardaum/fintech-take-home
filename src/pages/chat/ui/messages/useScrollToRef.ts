import { useEffect, useRef } from 'react'

export function useScrollToRef() {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.visualViewport) return

    function scrollToBottom() {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

    window.visualViewport.addEventListener('resize', scrollToBottom)
    return () => {
      window.visualViewport?.removeEventListener('resize', scrollToBottom)
    }
  }, [])

  return { bottomRef }
}
