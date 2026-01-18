import { useMemo } from 'react'

import { useChatQuery } from '@/entities/chat'
import { cn } from '@/shared/lib/cn'

import { groupConsecutiveMessages } from '../../lib/groupConsecutiveMessages'
import { groupMessagesBy5Minutes } from '../../lib/groupMessagesBy5Minutes'
import { groupMessagesByDay } from '../../lib/groupMessagesByDay'
import { MessageGroup } from './MessageGroup'
import { TimeLabel } from './TimeLabel'

function Content({ className }: { className?: string }) {
  const { data } = useChatQuery()

  const groupedMessages = useMemo(() => {
    if (!data) {
      return []
    }

    const groupedByDay = groupMessagesByDay(data.messages)

    return groupedByDay.map((group) => ({
      ...group,
      minuteGroups: groupMessagesBy5Minutes(group.messages).map((minuteGroup) => ({
        ...minuteGroup,
        messageGroups: groupConsecutiveMessages(minuteGroup.messages),
      })),
    }))
  }, [data])

  if (!data) {
    return null
  }

  return (
    <main className={cn('flex flex-1 flex-col items-start gap-6 px-1', className)}>
      <div className="mt-auto flex flex-col gap-6">
        {groupedMessages.map((group) => (
          <section key={group.timeKey} className="flex flex-col gap-6">
            <TimeLabel time={group.timeLabel} />
            {group.minuteGroups.map((minuteGroup) => (
              <section key={minuteGroup.minuteKey} className="flex flex-col gap-2">
                {minuteGroup.messageGroups.map((messageGroup, groupIndex) => (
                  <MessageGroup
                    key={groupIndex}
                    type={messageGroup.type}
                    senderName={messageGroup.senderName}
                    messages={messageGroup.messages}
                    timestamp={groupIndex === minuteGroup.messageGroups.length - 1 ? minuteGroup.timestamp : undefined}
                    isNew
                  />
                ))}
              </section>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}

export { Content }
