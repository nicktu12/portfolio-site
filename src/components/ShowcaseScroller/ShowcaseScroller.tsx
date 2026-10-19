import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import Figure from '../Figure/Figure'
import ExternalLink from '../ExternalLink/ExternalLink'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { ShowcaseItem } from '../../content/types'
import styles from './ShowcaseScroller.module.css'

interface ShowcaseScrollerProps {
  ariaLabel: string
  describedById?: string
  items: ShowcaseItem[]
  frameRatio?: string
}

function ShowcaseScroller({ ariaLabel, describedById, items, frameRatio }: ShowcaseScrollerProps) {
  const listRef = useRef<HTMLUListElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollNext, setCanScrollNext] = useState(items.length > 1)
  const prefersReducedMotion = usePrefersReducedMotion()

  const updatePosition = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const firstSlide = list.children[0] as HTMLElement | undefined
    const slideWidth = firstSlide?.clientWidth ?? 1
    const index = Math.round(list.scrollLeft / slideWidth)
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1))
    setCanScrollNext(list.scrollLeft + list.clientWidth < list.scrollWidth - 4)
  }, [items.length])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updatePosition)
    }
    list.addEventListener('scroll', onScroll, { passive: true })
    updatePosition()
    return () => {
      list.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [updatePosition])

  const scrollToIndex = (index: number) => {
    const list = listRef.current
    if (!list) return
    const clamped = Math.max(0, Math.min(index, items.length - 1))
    const slide = list.children[clamped] as HTMLElement | undefined
    if (!slide) return
    list.scrollTo({
      left: slide.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollToIndex(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollToIndex(activeIndex - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      scrollToIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      scrollToIndex(items.length - 1)
    }
  }

  const activeItem = items[activeIndex]

  if (items.length === 1) {
    return (
      <figure className={styles.singleFigure}>
        <Figure image={items[0].image} sizes="(min-width: 900px) 70vw, 90vw" />
        <figcaption className={styles.caption}>
          {items[0].caption}
          {items[0].sourceLabel && items[0].sourceUrl && (
            <>
              {' '}
              <ExternalLink href={items[0].sourceUrl} className={styles.source}>
                {items[0].sourceLabel}
              </ExternalLink>
            </>
          )}
        </figcaption>
      </figure>
    )
  }

  return (
    <div className={styles.wrap}>
      {
        /*
        WAI-ARIA carousel pattern: a scrollable group with tabindex=0 and
        arrow-key navigation. eslint-plugin-jsx-a11y doesn't recognize this
        as an established pattern and flags it as a generic non-interactive
        element with interactive behavior; it's correct as written.
        */
      }
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-noninteractive-element-interactions */}
      <ul
        ref={listRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        aria-describedby={describedById}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={frameRatio ? `${styles.scroller} ${styles.framed}` : styles.scroller}
        style={frameRatio ? ({ '--frame-ratio': frameRatio } as CSSProperties) : undefined}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
            className={styles.slide}
          >
            <figure>
              <Figure image={item.image} sizes="(min-width: 900px) 70vw, 90vw" />
              <figcaption className={styles.caption}>
                {item.caption}
                {item.sourceLabel && item.sourceUrl && (
                  <>
                    {' '}
                    <ExternalLink href={item.sourceUrl} className={styles.source}>
                      {item.sourceLabel}
                    </ExternalLink>
                  </>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {/* eslint-enable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-noninteractive-element-interactions */}

      <div
        className={
          canScrollNext ? styles.edgeFade : `${styles.edgeFade} ${styles.edgeFadeHidden}`
        }
        aria-hidden="true"
      />

      <div className={styles.controls}>
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous screen"
          className={styles.navButton}
        >
          ←
        </button>
        <div className={styles.indicators} aria-hidden="true">
          {items.map((item, index) => (
            <span
              key={item.id}
              className={
                index === activeIndex
                  ? `${styles.indicator} ${styles.indicatorActive}`
                  : styles.indicator
              }
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label="Next screen"
          className={styles.navButton}
        >
          →
        </button>
      </div>

      <p aria-live="polite" className="visually-hidden">
        Screen {activeIndex + 1} of {items.length}: {activeItem?.caption}
      </p>
    </div>
  )
}

export default ShowcaseScroller
