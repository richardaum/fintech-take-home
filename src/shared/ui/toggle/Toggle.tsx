import * as Switch from '@radix-ui/react-switch'

import { cn } from '@/shared/lib'

type ToggleProps = {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

function Toggle({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  className,
}: ToggleProps) {
  return (
    <Switch.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        'relative inline-flex h-6 w-[39px] shrink-0 cursor-pointer',
        'rounded-[27.375px] transition-colors duration-200',
        'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-100',
        className
      )}
    >
      <Switch.Thumb
        className={cn(
          'block h-[87.5%] w-[53.85%] rounded-[75px] bg-white',
          'absolute top-[6.25%] transition-all duration-200',
          'data-[state=checked]:left-[42.31%] data-[state=unchecked]:left-[3.85%]'
        )}
      />
    </Switch.Root>
  )
}

export { Toggle }
