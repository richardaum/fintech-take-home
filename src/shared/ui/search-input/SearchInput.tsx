import { cn } from '@/shared/lib'

export type SearchInputColorVariant = 'blue'

export const SEARCH_INPUT_COLOR_VARIANTS = {
  blue: cn('bg-content-on-color/37 h-[40px] rounded-[64px]'),
} as const

type SearchInputProps = {
  placeholder?: string
  leftSection?: React.ReactNode
  colorVariant?: SearchInputColorVariant
}

function SearchInput({
  placeholder,
  colorVariant,
  leftSection,
}: SearchInputProps) {
  return (
    <div className="relative flex-1">
      {leftSection && (
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          {leftSection}
        </div>
      )}
      <input
        autoComplete="off"
        name="search"
        className={cn(
          'w-full min-w-0 text-white',
          'text-label-small font-regular',
          leftSection && 'pl-10',
          colorVariant && SEARCH_INPUT_COLOR_VARIANTS[colorVariant]
        )}
        placeholder={placeholder}
        style={{
          WebkitAppearance: 'none',
        }}
      />
    </div>
  )
}

export { SearchInput }
