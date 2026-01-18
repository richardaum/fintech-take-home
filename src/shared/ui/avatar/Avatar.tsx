import type { ImgHTMLAttributes } from 'react'

import { cn } from '@/shared/lib'

type AvatarProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
  size?: number
}

function Avatar({
  src,
  size = 40,
  className,
  alt = '',
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        {...props}
      />
    </div>
  )
}

export { Avatar }
