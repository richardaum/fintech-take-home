import { cn } from '@/shared/lib'

import { ProfileSettingsList } from './ProfileSettingsList'
import { UserCard } from './UserCard'

function Content({ className }: { className?: string }) {
  return (
    <main className={cn('flex flex-col gap-4', className)}>
      <UserCard />
      <ProfileSettingsList />
    </main>
  )
}

export { Content }
