import { cn } from '@/shared/lib/cn'

function Content({ className }: { className?: string }) {
  return (
    <main className={cn('flex flex-col', className)}>
      <div className="flex flex-1 items-center justify-center">
        <p className="text-subhead-small text-content-tertiary">No messages yet</p>
      </div>
    </main>
  )
}

export { Content }
