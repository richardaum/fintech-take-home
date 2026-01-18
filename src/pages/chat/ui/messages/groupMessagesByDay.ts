import { format, isToday, isYesterday } from 'date-fns'

import type { ChatMessage } from '@/entities/chat'

export type GroupedMessage = {
  timeKey: string
  timeLabel: string
  messages: ChatMessage[]
}

export function groupMessagesByDay(messages: ChatMessage[]): GroupedMessage[] {
  const grouped = Object.groupBy(messages, (chatMessage: ChatMessage) => {
    if (!chatMessage.timestamp) {
      return chatMessage.time
    }

    const date = new Date(chatMessage.timestamp)
    date.setHours(0, 0, 0, 0)
    return date.toISOString()
  })

  return Object.entries(grouped).map(([timeKey, messages]) => {
    const messageArray = messages as ChatMessage[]
    const firstMessage = messageArray[0]
    let timeLabel: string

    if (!firstMessage.timestamp) {
      timeLabel = firstMessage.time
    } else {
      const date = new Date(firstMessage.timestamp)
      date.setHours(0, 0, 0, 0)

      if (isToday(date)) {
        timeLabel = 'Today'
      } else if (isYesterday(date)) {
        timeLabel = 'Yesterday'
      } else {
        timeLabel = format(date, 'EEEE, MMMM d')
      }
    }

    return {
      timeKey,
      timeLabel,
      messages: messageArray,
    }
  })
}
