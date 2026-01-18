import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
  onIntersect?: (isIntersecting: boolean) => void
) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)
  const onIntersectRef = useRef(onIntersect)

  useEffect(() => {
    onIntersectRef.current = onIntersect
  }, [onIntersect])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = entry.isIntersecting
      setIsVisible(isIntersecting)
      onIntersectRef.current?.(isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isVisible }
}
