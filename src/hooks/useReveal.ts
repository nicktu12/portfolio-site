import { useEffect, useRef, useState } from 'react'

// Single shared observer so the reveal cost stays bounded regardless of
// how many elements use it. Matches the data-reveal / --ease convention
// carried over from mickjeets-epk's GSAP setup, at 0KB.
let sharedObserver: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callbacks.get(entry.target)?.()
            sharedObserver?.unobserve(entry.target)
            callbacks.delete(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    )
  }
  return sharedObserver
}

export function useReveal<T extends Element>() {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = getObserver()
    callbacks.set(node, () => setRevealed(true))
    observer.observe(node)

    return () => {
      observer.unobserve(node)
      callbacks.delete(node)
    }
  }, [])

  return { ref, revealed }
}
