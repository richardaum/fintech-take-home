import type { MessageType } from '@/entities/chat'
import { useProfileQuery } from '@/entities/profile'
import chatbotImage from '@/shared/assets/chatbot.png'
import { Avatar } from '@/shared/ui'

type BotAvatarProps = {
  type: MessageType
  className?: string
}

function BotAvatar({ type, className }: BotAvatarProps) {
  const { data: profile } = useProfileQuery()
  const avatarSrc = type === 'incoming' ? chatbotImage : profile?.avatar
  return <Avatar src={avatarSrc} size={32} className={className} />
}

export { BotAvatar }
