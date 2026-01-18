import { useEffect, useRef } from 'react'

import { useChatQuery } from '@/entities/chat'
import { cn } from '@/shared/lib/cn'

import { groupMessagesBy5Minutes } from './groupMessagesBy5Minutes'
import { groupMessagesByDay } from './groupMessagesByDay'
import { MessageGroup } from './MessageGroup'
import { TimeLabel } from './TimeLabel'

function Content({ className }: { className?: string }) {
  const { data } = useChatQuery()
  const previousCountRef = useRef(0)

  const currentCount = data?.messages.length ?? 0

  useEffect(() => {
    if (data) {
      previousCountRef.current = currentCount
    }
  }, [currentCount, data])

  if (!data) {
    return null
  }

  const groupedByDay = groupMessagesByDay(data.messages)

  const groupedMessages = groupedByDay.map((group) => ({
    ...group,
    minuteGroups: groupMessagesBy5Minutes(group.messages),
  }))

  const previousCount = previousCountRef.current
  const hasNewMessages = currentCount > previousCount

  let messageIndex = 0

  return (
    <main className={cn('flex flex-1 flex-col items-start gap-6 px-1', className)}>
      <div className="mt-auto flex flex-col gap-6">
        {groupedMessages.map((group) => (
          <section key={group.timeKey} className="flex flex-col gap-6">
            <TimeLabel time={group.timeLabel} />
            {group.minuteGroups.map((minuteGroup) => (
              <section key={minuteGroup.minuteKey} className="flex flex-col gap-2">
                {minuteGroup.messages.map((chatMessage, index) => {
                  const isNew = hasNewMessages && messageIndex >= previousCount
                  messageIndex++
                  return (
                    <MessageGroup
                      key={index}
                      type={chatMessage.type}
                      senderName={chatMessage.senderName}
                      messages={chatMessage.messages}
                      timestamp={index === minuteGroup.messages.length - 1 ? minuteGroup.timestamp : undefined}
                      isNew={isNew}
                    />
                  )
                })}
              </section>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}

export { Content }
