import type { CSSProperties } from 'react'
import { profile } from '../../content/profile'
import { useReveal } from '../../hooks/useReveal'
import styles from './Hero.module.css'

function Hero() {
  const { ref: introRef, revealed: introRevealed } = useReveal<HTMLDivElement>()
  const { ref: portraitRef, revealed: portraitRevealed } = useReveal<HTMLDivElement>()

  return (
    <section id="hero" aria-label="Introduction" className={styles.hero}>
      <div className={`grid ${styles.grid}`}>
        <div
          ref={introRef}
          data-reveal=""
          data-revealed={introRevealed ? '' : undefined}
          className={styles.intro}
        >
          <p className={styles.meta}>
            {profile.role} at{' '}
            <a
              href={profile.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {profile.company.name}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            {' · '}
            {profile.location}
          </p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.positioning}>{profile.positioning}</p>
        </div>
        <div
          ref={portraitRef}
          data-reveal=""
          data-revealed={portraitRevealed ? '' : undefined}
          style={{ '--reveal-delay': '80ms' } as CSSProperties}
          className={styles.portraitWrap}
        >
          <img
            src={`/media/${profile.headshot.slug}.svg`}
            alt={profile.headshot.alt}
            width={profile.headshot.intrinsic.w}
            height={profile.headshot.intrinsic.h}
            className={styles.portrait}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
