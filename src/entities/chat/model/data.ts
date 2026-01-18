import type { Chat } from './types'

export const mockChatData: Chat = {
  messages: [
    {
      text: 'Welcome to CoinPay support! How can we assist you today?',
      type: 'incoming',
      senderName: 'Coinpay Helper Bot',
      timestamp: '2026-01-18T16:20:00-03:00',
    },
    {
      text: 'What is your question regarding?',
      type: 'incoming',
      senderName: 'Coinpay Helper Bot',
      timestamp: '2026-01-18T16:20:05-03:00',
    },
    {
      text: 'Are you having a problem with a specific feature?',
      type: 'incoming',
      senderName: 'Coinpay Helper Bot',
      timestamp: '2026-01-18T16:20:10-03:00',
    },
    {
      text: 'Have you tried troubleshooting steps we provided in FAQ or other documentation?',
      type: 'incoming',
      senderName: 'Coinpay Helper Bot',
      timestamp: '2026-01-18T16:20:15-03:00',
    },
  ],
}
