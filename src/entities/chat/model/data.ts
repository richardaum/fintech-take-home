import type { Chat } from './types'

export const mockChatData: Chat = {
  messages: [
    {
      time: 'Sunday at 4:20 PM',
      type: 'incoming',
      senderName: 'Coinpay Helper Bot',
      messages: [
        {
          text: 'Welcome to CoinPay support! How can we assist you today?',
        },
        {
          text: 'What is your question regarding?',
        },
        {
          text: 'Are you having a problem with a specific feature?',
        },
        {
          text: 'Have you tried troubleshooting steps we provided in FAQ or other documentation?',
        },
      ],
      timestamp: '2026-01-18T10:00:00-03:00',
    },
  ],
}
