export type MessageType = 'incoming' | 'outgoing'

export type ChatMessage = {
  text: string
  type: MessageType
  senderName?: string
  timestamp: string
}

export type Chat = {
  messages: ChatMessage[]
}

export type ChatData = Chat
