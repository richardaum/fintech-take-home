import { motion } from 'framer-motion'

import { useProfileQuery } from '@/entities/profile'
import { EditIcon } from '@/shared/icons'
import { animationManager, useAnimationStore } from '@/shared/lib/animations'
import { Avatar } from '@/shared/ui'

import { AnimationName, profileAnimationDelays } from './animations'

function UserCard() {
  const { data } = useProfileQuery()
  const addCompletedAnimation = useAnimationStore((state) => state.addCompletedAnimation)

  return (
    <motion.section
      {...animationManager.getAnimationProps({
        type: 'fade',
        delay: profileAnimationDelays.userCard,
      })}
      className="relative flex flex-col items-center gap-2 rounded-xl bg-gray-900 p-4 text-center"
      onAnimationComplete={() => {
        addCompletedAnimation(AnimationName.UserCard)
      }}
    >
      <Avatar src={data.avatar} size={64} />

      <EditIcon className="text-content-disabled absolute top-4 right-4 size-6" />

      <section className="flex flex-col gap-1">
        <span className="text-subhead-large text-content-secondary">{data.fullName}</span>
        <span className="text-body-small text-content-tertiary">{data.email}</span>
        <span className="text-body-small text-content-tertiary">{data.phoneNumber}</span>
      </section>
    </motion.section>
  )
}

export { UserCard }
