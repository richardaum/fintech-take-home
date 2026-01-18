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
      time: new Date().toLocaleString('en-US', {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
      type: 'outgoing',
      messages: [
        {
          text,
          height: 'auto',
        },
      ],
      timestamp: new Date().toISOString(),
    }

    set((state) => ({
      messages: [...state.messages, newMessage],
    }))
  },
}))
