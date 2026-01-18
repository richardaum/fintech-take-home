import { create } from 'zustand'

import { mockChatData } from './data'
import type { ChatMessage } from './types'

type ChatStore = {
  messages: ChatMessage[]
  sendMessage: (text: string) => Promise<void>
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: mockChatData.messages,

  sendMessage: async (text: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const newMessage: ChatMessage = {
      text,
      type: 'outgoing',
      timestamp: new Date().toISOString(),
    }

    set((state) => ({
      messages: [...state.messages, newMessage],
    }))
  },
}))
