import type { MessageType } from '@/entities/chat'
import { cn } from '@/shared/lib/cn'

type MessageBubbleProps = {
  children: React.ReactNode
  type: MessageType
  className?: string
}

function MessageBubble({ children, type, className }: MessageBubbleProps) {
  const isIncoming = type === 'incoming'

  return (
    <div
      className={cn(
        'flex w-full flex-row items-center gap-2 p-4',
        isIncoming
          ? 'rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray-900'
          : 'bg-bg-accent rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl',
        className
      )}
    >
      <p className="text-body-small text-content-primary">{children}</p>
    </div>
  )
}

export { MessageBubble }
