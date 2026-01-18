import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'

import {
  AngleRightIcon,
  BankIcon,
  CreditCardChangeIcon,
  DatabaseIcon,
  InfoCircle1Icon,
  LogInIcon,
  MoonIcon,
  QuestionCircle1Icon,
  SettingsIcon,
  ShieldIcon,
  UserFilledIcon,
} from '@/shared/icons'
import { cn } from '@/shared/lib'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'
import { CircleIcon, Divider, Toggle } from '@/shared/ui'

import { AnimationName, profileAnimationDelays } from './animations'

function ProfileSettingsList() {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.ul
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: profileAnimationDelays.settingsList,
      })}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.SettingsList)
      }}
      className="flex flex-col gap-3 rounded-xl bg-gray-900 p-4"
    >
      <ListItem
        label="Dark Mode"
        icon={MoonIcon}
        iconColor={cn('light text-content-primary bg-gray-300')}
        rightSection={<Toggle onCheckedChange={() => alert('Not implemented')} />}
        divider
      />
      <ListItem
        label="Personal Info"
        icon={UserFilledIcon}
        iconColor={cn('light bg-bg-accent-light text-blue-500')}
        divider
      />
      <ListItem
        label="Bank & Cards"
        icon={BankIcon}
        iconColor={cn('light bg-bg-secondary-light text-yellow-900')}
        divider
      />
      <ListItem
        label="Transaction"
        icon={CreditCardChangeIcon}
        iconColor={cn('light bg-bg-error-light text-red-500')}
        divider
      />
      <ListItem label="Settings" icon={SettingsIcon} iconColor={cn('light bg-bg-accent-light text-blue-500')} divider />
      <ListItem
        label="Data Privacy"
        icon={DatabaseIcon}
        iconColor={cn('light bg-bg-success-light text-green-500')}
        divider
      />
      <ListItem
        label="Help Center"
        icon={QuestionCircle1Icon}
        iconColor={cn('light bg-bg-secondary-light text-yellow-900')}
        divider
      />
      <ListItem
        label="About Coinpay"
        icon={InfoCircle1Icon}
        iconColor={cn('light bg-bg-error-light text-red-500')}
        divider
      />
      <ListItem label="Security" icon={ShieldIcon} iconColor={cn('light bg-bg-success-light text-green-500')} divider />
      <ListItem label="Logout" icon={LogInIcon} iconColor={cn('light bg-bg-error-light text-red-500')} />
    </motion.ul>
  )
}

function ListItem({
  label,
  icon: Icon,
  iconColor,
  rightSection,
  divider,
}: {
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  iconColor: string
  rightSection?: React.ReactNode
  divider?: boolean
}) {
  return (
    <>
      <li>
        <button type="button" className="flex w-full cursor-pointer items-center gap-3">
          <div className="flex items-center gap-3">
            <CircleIcon icon={Icon} size={48} iconSize={24} className={iconColor} />
            <span className="text-subhead-large text-content-primary">{label}</span>
          </div>
          <div className="ml-auto">{rightSection || <AngleRightIcon className="text-content-primary size-6" />}</div>
        </button>
      </li>
      {divider && <Divider orientation="horizontal" className="my-0" />}
    </>
  )
}

export { ProfileSettingsList }
