import { motion } from 'framer-motion'

import { BellIcon, SearchIcon, TrophyStarIcon } from '@/shared/icons'
import { cn, headerAnimations } from '@/shared/lib'
import { SearchInput } from '@/shared/ui'

function HeaderTopbar({ className }: { className?: string }) {
  return (
    <motion.div
      {...headerAnimations.topbar}
      className={cn(
        'flex w-full items-center justify-between gap-8',
        className
      )}
    >
      <TrophyStarIcon className="size-6" />
      <SearchInput
        colorVariant="blue"
        leftSection={<SearchIcon />}
        placeholder={`Search "Payments"`}
      />
      <BellIcon className="size-6" />
    </motion.div>
  )
}

export { HeaderTopbar }
