import { ChatFilledIcon } from '@/shared/icons'
import { cn } from '@/shared/lib/cn'

type BotAvatarProps = {
  className?: string
}

function BotAvatar({ className }: BotAvatarProps) {
  return (
    <div
      className={cn(
        'border-content-accent flex h-8 w-8 flex-none items-center justify-center rounded-full border-[1.5px] bg-gray-900',
        className
      )}
    >
      <ChatFilledIcon className="text-content-accent h-4 w-4" />
    </div>
  )
}

export { BotAvatar }
