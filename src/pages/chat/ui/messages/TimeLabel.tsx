import { cn } from '@/shared/lib/cn'

type TimeLabelProps = {
  time: string
  className?: string
}

function TimeLabel({ time, className }: TimeLabelProps) {
  return (
    <section className={cn('flex h-8 w-full items-center justify-center gap-2 py-2', className)}>
      <span className="text-body-small text-content-tertiary text-center">{time}</span>
    </section>
  )
}

export { TimeLabel }
