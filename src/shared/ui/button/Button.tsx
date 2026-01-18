import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/shared/lib'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  leftSection?: ReactNode
}

function Button({ children, className, leftSection, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'text-label-small font-regular text-content-primary',
        'box-border flex h-10 cursor-pointer items-center justify-center',
        'gap-[4px] rounded-[82px] border-[1.5px] border-white px-4 py-3 leading-4',
        className
      )}
      {...props}
    >
      {leftSection}
      {children}
    </button>
  )
}

export { Button }
