import { useMemo } from 'react'
import Select, {
  components,
  type GroupBase,
  type MenuListProps,
  type OptionProps,
  type SingleValue,
} from 'react-select'
import { AutoSizer, CellMeasurer, CellMeasurerCache, List, type ListRowProps } from 'react-virtualized'

import { AngleDownIcon, CheckIcon } from '@/shared/icons'
import { cn } from '@/shared/lib/cn'
import { CircleIcon } from '@/shared/ui'

import { FLAG_TO_CURRENCY } from './currencyMapping'
import type { CurrencyOption } from './types'

type CurrencySelectProps = {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}

function CurrencySelect({ value, onValueChange, defaultValue }: CurrencySelectProps) {
  const currencies = Object.entries(FLAG_TO_CURRENCY).sort((a, b) => a[1].currency.localeCompare(b[1].currency))

  const options: CurrencyOption[] = currencies.map(([code, { currency, icon }]) => ({
    value: code,
    label: currency,
    icon,
  }))

  const selectedOption = options.find((opt) => opt.value === value)
  const defaultValueOption = options.find((opt) => opt.value === defaultValue)

  const handleChange = (newValue: SingleValue<CurrencyOption>) => {
    onValueChange?.(newValue?.value ?? '')
  }

  return (
    <Select<CurrencyOption>
      value={selectedOption}
      defaultValue={defaultValueOption}
      onChange={handleChange}
      options={options}
      formatOptionLabel={formatOptionLabel}
      components={{ DropdownIndicator, Option, ClearIndicator, MenuList }}
      placeholder="Select currency"
      isSearchable={false}
      className="light flex items-center gap-1"
      classNamePrefix="react-select"
      unstyled
      classNames={{
        menu: () => cn('bg-bg mt-1 w-64 rounded px-2 py-3 drop-shadow-[0px_3px_10px_rgba(0,0,0,0.12)]'),
        singleValue: () => cn('m-0'),
      }}
      styles={{
        menu: (base) => ({
          ...base,
          width: 'max-content',
          left: '50%',
          transform: 'translateX(-50%)',
        }),
      }}
    />
  )
}

function DropdownIndicator() {
  return <AngleDownIcon className="ml-1 size-3 cursor-pointer" />
}

function Option(props: OptionProps<CurrencyOption>) {
  const { data, isSelected, isFocused } = props
  const { icon: Icon, label } = data

  return (
    <components.Option {...props}>
      <button
        type="button"
        className={cn(
          'text-content-secondary mb-4 flex w-full cursor-pointer items-center gap-2 rounded px-1 text-left',
          isFocused && 'bg-gray-100'
        )}
      >
        <Icon className="shrink-0" />
        <span className="min-w-0 flex-1">{label}</span>
        {isSelected && <CheckIcon className="ml-auto shrink-0" />}
      </button>
    </components.Option>
  )
}

function formatOptionLabel({ label, icon: Icon }: CurrencyOption) {
  return (
    <button type="button" className="flex cursor-pointer items-center gap-1">
      <CircleIcon icon={Icon} size={12} iconSize={20} />
      {label}
    </button>
  )
}

function ClearIndicator() {
  return null
}

function MenuList(props: MenuListProps<CurrencyOption, false, GroupBase<CurrencyOption>>) {
  const { children, maxHeight } = props

  const cellCache = useMemo(() => new CellMeasurerCache({ fixedWidth: true, defaultHeight: 24 }), [])

  const rows = children

  if (!Array.isArray(rows)) {
    return <>{children}</>
  }

  const rowRenderer = ({ key, parent, index, style }: ListRowProps) => (
    <CellMeasurer cache={cellCache} key={key} columnIndex={0} rowIndex={index} parent={parent}>
      <div key={key} style={style}>
        {rows[index]}
      </div>
    </CellMeasurer>
  )

  return (
    <div style={{ height: maxHeight, width: '100%', minWidth: '256px' }}>
      <AutoSizer>
        {({ width, height }) => {
          const listWidth = width > 0 ? width : 256
          return (
            <List
              width={listWidth}
              height={height}
              deferredMeasurementCache={cellCache}
              rowHeight={cellCache.rowHeight}
              rowCount={rows.length}
              rowRenderer={rowRenderer}
            />
          )
        }}
      </AutoSizer>
    </div>
  )
}

export { CurrencySelect }
