import { useState } from 'react'

import { useChatStore } from '@/entities/chat'
import { SendRightIcon } from '@/shared/icons'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui'

type MessageInputProps = {
  className?: string
}

function MessageInput({ className }: MessageInputProps) {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const sendMessage = useChatStore((state) => state.sendMessage)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim() || isSending) return

    setIsSending(true)
    try {
      await sendMessage(message.trim())
      setMessage('')
      scrollToBottom()
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('sticky bottom-0 z-10 flex w-full flex-row items-center gap-4 p-4', className)}
    >
      <div className="relative flex flex-1 items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          disabled={isSending}
          className={cn(
            'w-full rounded-full bg-gray-900 py-5 pr-14 pl-4',
            'text-body-small text-content-disabled',
            'focus:ring-content-accent focus:ring-2 focus:outline-none',
            'placeholder:text-content-disabled',
            'disabled:opacity-50'
          )}
        />
        <Button
          type="submit"
          variant="primary"
          shape="round"
          size="nav"
          disabled={!message.trim() || isSending}
          className="absolute right-0 size-14"
        >
          <SendRightIcon className="size-6" />
        </Button>
      </div>
    </form>
  )
}

function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }, 100)
}

export { MessageInput }
