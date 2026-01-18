import { motion } from 'framer-motion'

import {
  BankIcon,
  DollarReceiveCircleIcon,
  DollarSendCircleIcon,
} from '@/shared/icons'
import { cn, headerAnimations } from '@/shared/lib'
import { Divider } from '@/shared/ui'

function HeaderActions({ className }: { className?: string }) {
  return (
    <motion.div
      {...headerAnimations.actions}
      className={cn(
        'flex w-full flex-1 items-center justify-around rounded-xl bg-gray-900 py-[18px]',
        className
      )}
    >
      <HeaderActionItem
        icon={DollarSendCircleIcon}
        label="Send"
        className="text-blue-400"
      />
      <Divider orientation="vertical" />

      <HeaderActionItem
        icon={DollarReceiveCircleIcon}
        label="Receive"
        className="text-yellow-800"
      />
      <Divider orientation="vertical" />

      <HeaderActionItem
        icon={BankIcon}
        label="Bank"
        className="text-orange-800"
      />
    </motion.div>
  )
}

function HeaderActionItem({
  icon: Icon,
  className,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  className?: string
  label?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-1',
        className
      )}
    >
      <Icon className="size-8" />
      {label && (
        <span className="text-label-small text-content-tertiary font-regular">
          {label}
        </span>
      )}
    </div>
  )
}

export { HeaderActions }
