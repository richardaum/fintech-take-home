import type { ComponentType, CSSProperties } from 'react'

import { cn } from '@/shared/lib/cn'

type CircleIconProps = {
  icon: ComponentType<{ className?: string; style?: CSSProperties }>
  size?: number
  iconSize?: number
  className?: string
}

function CircleIcon({ icon: Icon, size = 12, iconSize = 20, className }: CircleIconProps) {
  return (
    <div
      className={cn('flex items-center justify-center overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      <Icon style={{ width: iconSize, height: iconSize }} />
    </div>
  )
}

export { CircleIcon }
