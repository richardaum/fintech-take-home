import { differenceInHours, differenceInMinutes, formatDistanceToNow } from 'date-fns'
import { useEffect, useState } from 'react'

import { cn } from '@/shared/lib/cn'

type TimestampProps = {
  timestamp: string
  align?: 'left' | 'right'
  className?: string
}

function Timestamp({ timestamp, align = 'left', className }: TimestampProps) {
  const [formattedTime, setFormattedTime] = useState(() =>
    formatDistanceToNow(new Date(timestamp), { addSuffix: true })
  )

  useEffect(() => {
    const updateTime = () => {
      setFormattedTime(formatDistanceToNow(new Date(timestamp), { addSuffix: true }))
    }

    const timestampDate = new Date(timestamp)
    const now = new Date()
    const minutesDiff = differenceInMinutes(now, timestampDate)
    const hoursDiff = differenceInHours(now, timestampDate)

    let interval: number

    if (minutesDiff < 1) {
      interval = setInterval(updateTime, 10000)
    } else if (minutesDiff < 60) {
      interval = setInterval(updateTime, 60000)
    } else if (hoursDiff < 24) {
      interval = setInterval(updateTime, 3600000)
    } else {
      interval = setInterval(updateTime, 86400000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [timestamp])

  return (
    <div
      className={cn(
        'flex h-8 flex-row items-start gap-2 py-2 pr-2',
        align === 'left' ? 'pl-11' : 'ml-auto pr-11',
        className
      )}
    >
      <span className="text-body-small text-content-disabled h-4">{formattedTime}</span>
    </div>
  )
}

export { Timestamp }
