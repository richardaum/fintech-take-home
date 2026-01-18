import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/shallow'

import {
  ChartPieFilledIcon,
  ChartPieOutlinedIcon,
  ChatFilledIcon,
  ChatOutlinedIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  ScannerFilledIcon,
  ScannerOutlinedIcon,
  UserFilledIcon,
  UserOutlinedIcon,
} from '@/shared/icons'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'
import { cn } from '@/shared/lib/cn'

import { Button } from '../button'

const ICONS = {
  home: { outlined: HomeOutlinedIcon, filled: HomeFilledIcon },
  chartPie: { outlined: ChartPieOutlinedIcon, filled: ChartPieFilledIcon },
  scanner: { outlined: ScannerOutlinedIcon, filled: ScannerFilledIcon },
  chat: { outlined: ChatOutlinedIcon, filled: ChatFilledIcon },
  user: { outlined: UserOutlinedIcon, filled: UserFilledIcon },
}

function BottomNav() {
  const { showBottomNav, expectedAnimations } = useAnimationStore(
    useShallow((state) => ({
      showBottomNav: state.showBottomNav,
      expectedAnimations: state.expectedAnimations,
    }))
  )

  if (!showBottomNav && expectedAnimations.length > 0) {
    return null
  }

  return (
    <motion.nav
      {...animationManager.getAnimationProps({
        type: 'slideUp',
      })}
      className="sticky bottom-0 z-50 mx-auto mt-auto h-[calc(64px+16px)] w-full bg-transparent px-4 pt-4 backdrop-blur-md"
    >
      <ul className="mx-auto mb-0 flex max-w-[400px] items-center justify-around rounded-xl bg-gray-900">
        <NavItem icon={ICONS.home} path="/" />
        <NavItem icon={ICONS.chartPie} path="/chart" notImplemented />
        <NavItem icon={ICONS.scanner} isPrimary path="/scanner" notImplemented />
        <NavItem icon={ICONS.chat} path="/chat" />
        <NavItem icon={ICONS.user} path="/profile" />
      </ul>
    </motion.nav>
  )
}

function NavItem({
  icon: Icon,
  isPrimary,
  path,
  disabled,
  notImplemented,
}: {
  icon: {
    outlined: ComponentType<SVGProps<SVGSVGElement>>
    filled: ComponentType<SVGProps<SVGSVGElement>>
  }
  isPrimary?: boolean
  path: string
  disabled?: boolean
  notImplemented?: boolean
}) {
  const location = useLocation()
  const isActive = location.pathname === path
  const IconComponent = isActive ? Icon.filled : Icon.outlined

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (notImplemented) {
      e.preventDefault()
      alert('Not implemented')
    }
  }

  return (
    <li>
      <Link to={path} onClick={handleClick}>
        <Button
          variant={isPrimary ? 'primary' : 'ghost'}
          shape="radius"
          size="nav"
          className="relative"
          disabled={disabled}
          tabIndex={-1}
        >
          <IconComponent className={cn(isActive && 'text-bg-accent')} />
          {isActive && <div className="bg-bg-accent absolute bottom-3 left-1/2 size-1 -translate-x-1/2 rounded-full" />}
        </Button>
      </Link>
    </li>
  )
}

export { BottomNav }
