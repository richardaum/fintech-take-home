import type { Chat } from './types'
import { useChatStore } from './useChatStore'

export function useChatQuery() {
  const messages = useChatStore((state) => state.messages)

  const data: Chat | null = {
    messages,
  }

  return { data }
}
