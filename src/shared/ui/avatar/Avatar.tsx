import type { ImgHTMLAttributes } from 'react'
import { useState } from 'react'

import { cn } from '@/shared/lib/cn'

type AvatarProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
  size?: number
}

function Avatar({ src, size = 40, className, alt = '', ...props }: AvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={cn('relative shrink-0 overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-800" />}
      <img
        src={src}
        alt={alt}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}

export { Avatar }
