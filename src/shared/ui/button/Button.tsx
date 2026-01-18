import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/shared/lib'

type ButtonVariant = 'outline' | 'primary' | 'ghost'
type ButtonShape = 'square' | 'radius' | 'round'
type ButtonSize = 'auto' | 'nav' | 'thin'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  leftSection?: ReactNode
  variant?: ButtonVariant
  shape?: ButtonShape
  size?: ButtonSize
}

function Button({
  children,
  className,
  leftSection,
  variant = 'outline',
  shape = 'round',
  size = 'auto',
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    outline: cn(
      'text-content-primary border-[1.5px] border-white bg-transparent',
      disabled && 'cursor-not-allowed opacity-50'
    ),
    primary: cn(
      'text-content-on-color bg-bg-accent border-0',
      disabled && 'cursor-not-allowed opacity-50'
    ),
    ghost: cn(
      'text-content-primary border-0 bg-transparent',
      disabled && 'cursor-not-allowed opacity-50'
    ),
  }

  const shapeStyles = {
    square: 'rounded-none',
    radius: 'rounded-lg',
    round: 'rounded-[50px]',
  }

  const sizeStyles = {
    auto: cn('h-14 px-[46px] py-4'),
    thin: cn(''),
    nav: cn('h-16 w-16 p-0'),
  }

  return (
    <button
      className={cn(
        'text-label-large font-medium',
        'box-border flex items-center justify-center',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        'gap-2',
        variantStyles[variant],
        shapeStyles[shape],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftSection}
      {children}
    </button>
  )
}

export { Button }
