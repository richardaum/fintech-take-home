import type { ChatMessage } from '@/entities/chat'

export type MessageGroup = {
  type: ChatMessage['type']
  senderName?: string
  messages: ChatMessage[]
  timestamp: string
}

export function groupConsecutiveMessages(messages: ChatMessage[]): MessageGroup[] {
  if (messages.length === 0) return []

  const groups: MessageGroup[] = []
  let currentGroup: MessageGroup | null = null

  for (const message of messages) {
    if (currentGroup && currentGroup.type === message.type && currentGroup.senderName === message.senderName) {
      currentGroup.messages.push(message)
    } else {
      if (currentGroup) {
        groups.push(currentGroup)
      }
      currentGroup = {
        type: message.type,
        senderName: message.senderName,
        messages: [message],
        timestamp: message.timestamp,
      }
    }
  }

  if (currentGroup) {
    groups.push(currentGroup)
  }

  return groups
}
