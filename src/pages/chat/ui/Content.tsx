import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Chat } from '@/shared/assets'
import { ChatFilledIcon, QuestionCircleIcon } from '@/shared/icons'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui'

import { AnimationName, chatAnimationDelays } from './animations'

function Content({ className }: { className?: string }) {
  return (
    <main className={cn('flex flex-col items-center text-center', className)}>
      <ChatIllustration />
      <Title />
      <Description />
      <Buttons />
    </main>
  )
}

function ChatIllustration() {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.section
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: chatAnimationDelays.chatIcon,
      })}
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.ChatIcon)
      }}
    >
      <Chat className="mt-8 w-[336px] !shrink" />
    </motion.section>
  )
}

function Title() {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.h1
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: chatAnimationDelays.title,
      })}
      className="text-title-large mt-16 font-semibold"
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.Title)
      }}
    >
      CoinPay Support
    </motion.h1>
  )
}

function Description() {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.p
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: chatAnimationDelays.description,
      })}
      className="text-subhead-small text-content-tertiary mt-3"
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.Description)
      }}
    >
      Our dedicated team is here to assist you with any questions or issues related to our Coinpay mobile app.{' '}
    </motion.p>
  )
}

function Buttons() {
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)
  const navigate = useNavigate()

  return (
    <motion.section
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: chatAnimationDelays.buttons,
      })}
      className="mt-16 flex w-full flex-col gap-3"
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.Buttons)
      }}
    >
      <Button
        variant="primary"
        shape="round"
        leftSection={<ChatFilledIcon />}
        className="w-full"
        onClick={() => navigate('/chat/messages')}
      >
        Start Chat
      </Button>

      <Button variant="outline" shape="round" leftSection={<QuestionCircleIcon />} className="w-full" color="accent">
        View FAQ
      </Button>
    </motion.section>
  )
}

export { Content }
