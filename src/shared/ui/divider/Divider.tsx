import type { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: 'horizontal' | 'vertical'
}

function Divider({ orientation = 'horizontal', className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        'border-divider flex-none flex-grow-0',
        orientation === 'horizontal' ? 'h-0 w-full border-t' : 'h-0 w-[25px] rotate-90 border-t',
        className
      )}
      {...props}
    />
  )
}

export { Divider }
