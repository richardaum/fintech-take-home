import type { ChatMessage } from '@/entities/chat'

export type MinuteGroupedMessage = {
  minuteKey: string
  timestamp: string
  messages: ChatMessage[]
}

export function groupMessagesBy5Minutes(messages: ChatMessage[]): MinuteGroupedMessage[] {
  const grouped = Object.groupBy(messages, (message: ChatMessage) => {
    const date = new Date(message.timestamp)
    date.setSeconds(0, 0)
    const minutes = date.getMinutes()
    const roundedMinutes = Math.floor(minutes / 5) * 5
    date.setMinutes(roundedMinutes, 0, 0)
    return date.toISOString()
  })

  return Object.entries(grouped).map(([minuteKey, messages]) => {
    const messageArray = messages as ChatMessage[]
    return {
      minuteKey,
      timestamp: messageArray[0].timestamp,
      messages: messageArray,
    }
  })
}
