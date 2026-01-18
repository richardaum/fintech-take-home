import { motion } from 'framer-motion'

import type { Message, MessageType } from '@/entities/chat'
import { cn } from '@/shared/lib/cn'
import { Timestamp } from '@/shared/ui'

import { BotAvatar } from './BotAvatar'
import { MessageBubble } from './MessageBubble'

type MessageGroupProps = {
  type: MessageType
  senderName?: string
  messages: Message[]
  timestamp?: string
  isNew?: boolean
  className?: string
}

function MessageGroup({ type, senderName, messages, timestamp, isNew = false, className }: MessageGroupProps) {
  const isIncoming = type === 'incoming'
  const initial = isNew ? (isIncoming ? { opacity: 0, x: -20 } : { opacity: 0, x: 20 }) : false
  const animate = isNew ? { opacity: 1, x: 0 } : {}

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn('flex w-full flex-col items-start', isIncoming ? 'pr-[77px]' : 'pl-[77px]', className)}
    >
      <div className={cn('flex w-full flex-row items-end gap-3', !isIncoming && 'flex-row-reverse')}>
        <BotAvatar type={type} />

        <div className="flex flex-col items-start gap-2">
          {senderName && <div className="text-body-small text-content-disabled h-4">{senderName}</div>}

          <div className="flex w-full flex-col items-start gap-2">
            {messages.map((message, index) => (
              <MessageBubble key={index} type={type}>
                {message.text}
              </MessageBubble>
            ))}
          </div>
        </div>
      </div>

      {timestamp && <Timestamp timestamp={timestamp} align={isIncoming ? 'left' : 'right'} />}
    </motion.div>
  )
}

export { MessageGroup }
