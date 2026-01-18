export type Message = {
  text: string
}

export type MessageType = 'incoming' | 'outgoing'

export type ChatMessage = {
  time: string
  type: MessageType
  senderName?: string
  messages: Message[]
  timestamp?: string
}

export type Chat = {
  messages: ChatMessage[]
}

export type ChatData = Chat
